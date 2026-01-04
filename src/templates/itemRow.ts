import { DEFAULTS } from '@/utils/constants';
import { InventoryItem } from '../types/homeAssistant';
import { TodoList } from '../types/todoList';
import { TranslationData } from '@/types/translatableComponent';
import { TranslationManager } from '@/services/translationManager';

export function createItemRowTemplate(
  item: InventoryItem,
  todoLists: TodoList[],
  translations: TranslationData,
  showAutoAddInfo: boolean = true,
): string {
  const isLowStock = item.quantity > 0 && item.quantity <= 1;
  const lowStockLabel = TranslationManager.localize(
    translations,
    'items.last_item',
    undefined,
    'Last',
  );

  const getTodoListName = (entityId: string): string => {
    const list = todoLists.find((l) => l.entity_id === entityId || l.id === entityId);
    return list ? list.name : entityId;
  };

  const getExpiryStatus = (
    expiryDate: string,
    threshold: number = DEFAULTS.EXPIRY_ALERT_DAYS,
  ): { class: string; label: string } => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiry = new Date(expiryDate + 'T00:00:00');

    const daysUntilExpiry = Math.floor(
      (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (daysUntilExpiry < 0) {
      const daysAgo = Math.abs(daysUntilExpiry);
      const key = daysAgo === 1 ? 'expiry.expired_day_ago' : 'expiry.expired_days_ago';
      return {
        class: 'expired',
        label: TranslationManager.localize(
          translations,
          key,
          { days: daysAgo },
          `Expired ${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`,
        ),
      };
    } else if (daysUntilExpiry === 0) {
      return {
        class: 'expires-today',
        label: TranslationManager.localize(
          translations,
          'expiry.expires_today',
          undefined,
          'Expires today',
        ),
      };
    } else if (daysUntilExpiry <= threshold) {
      const key = daysUntilExpiry === 1 ? 'expiry.expires_in_day' : 'expiry.expires_in_days';
      return {
        class: 'expiring-soon',
        label: TranslationManager.localize(
          translations,
          key,
          { days: daysUntilExpiry },
          `Expires in ${daysUntilExpiry} day${daysUntilExpiry !== 1 ? 's' : ''}`,
        ),
      };
    } else {
      return { class: 'expiry-safe', label: `${expiryDate}` };
    }
  };

  const expiryInfo = item.expiry_date
    ? getExpiryStatus(item.expiry_date, item.expiry_alert_days)
    : null;

  const metaParts: string[] = [];
  if (item.category) {
    metaParts.push(`<span class="item-meta-tag">${item.category}</span>`);
  }
  if (item.description) {
    metaParts.push(`<span class="item-meta-text">${item.description}</span>`);
  }

  const infoBadges: string[] = [];
  if (expiryInfo) {
    infoBadges.push(
      `<span class="item-pill expiry ${expiryInfo.class}">${expiryInfo.label}</span>`,
    );
  }
  if (item.auto_add_enabled && showAutoAddInfo) {
    infoBadges.push(
      `<span class="item-pill auto-add-info">${TranslationManager.localize(
        translations,
        'items.auto_add_info',
        {
          quantity: item.auto_add_to_list_quantity || 0,
          list: getTodoListName(item.todo_list || ''),
        },
        `Auto-add at ≤ ${item.auto_add_to_list_quantity || 0} → ${getTodoListName(item.todo_list || '')}`,
      )}</span>`,
    );
  }

  const locationLabel = item.location?.trim();
  const lastBadge = isLowStock
    ? `<span class="item-badge item-badge--low">${lowStockLabel}</span>`
    : '';
  const locationBadge = locationLabel
    ? `<span class="item-badge item-badge--location">${locationLabel}</span>`
    : '';

  return `
    <div class="item-row ${item.quantity === 0 ? 'zero-quantity' : ''} ${item.auto_add_enabled ? 'auto-add-enabled' : ''} ${isLowStock ? 'item-row--low' : ''}">
      <div class="item-main">
        <div class="item-name-row">
          <span class="item-name">${item.name}</span>
        </div>
        ${metaParts.length > 0 ? `<div class="item-subline">${metaParts.join('<span class="item-meta-sep">•</span>')}</div>` : '<div class="item-subline"></div>'}
        ${infoBadges.length > 0 ? `<div class="item-info-row">${infoBadges.join('')}</div>` : '<div class="item-info-row"></div>'}
        <div class="item-badges">
          <div class="item-badge-slot item-badge-slot--top">${lastBadge}</div>
          <div class="item-badge-slot item-badge-slot--bottom">${locationBadge}</div>
        </div>
      </div>
      <div class="item-qty ${item.quantity === 0 ? 'is-zero' : ''}">
        <span class="qty-value">${item.quantity}</span>
        ${item.unit ? `<span class="qty-unit">${item.unit}</span>` : ''}
      </div>
      <div class="item-controls">
        <button class="btn-icon btn-increment" data-action="increment" data-name="${item.name}" title="${TranslationManager.localize(translations, 'actions.increment', undefined, 'Increase quantity')}">
          <span class="btn-icon-text">+</span>
        </button>
        <button class="btn-icon btn-decrement" data-action="decrement" data-name="${item.name}" ${item.quantity === 0 ? 'disabled' : ''} title="${TranslationManager.localize(translations, 'actions.decrement', undefined, 'Decrease quantity')}">
          <span class="btn-icon-text">−</span>
        </button>
        <button class="btn-icon btn-edit" data-action="open_edit" data-name="${item.name}" title="${TranslationManager.localize(translations, 'actions.edit', undefined, 'Edit')}">
          <span class="btn-icon-text">✎</span>
        </button>
        <button class="btn-icon btn-remove" data-action="remove" data-name="${item.name}" title="${TranslationManager.localize(translations, 'actions.remove', undefined, 'Remove item')}">
          <span class="btn-icon-text">🗑️</span>
        </button>
      </div>
    </div>
  `;
}
