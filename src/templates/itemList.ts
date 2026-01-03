import { CSS_CLASSES } from '../utils/constants';
import { InventoryItem } from '../types/homeAssistant';
import { TodoList } from '../types/todoList';
import { Utilities } from '../utils/utilities';
import { createItemRowTemplate } from './itemRow';
import { TranslationData } from '@/types/translatableComponent';
import { TranslationManager } from '@/services/translationManager';

export function createItemsList(
  items: InventoryItem[],
  sortMethod: string,
  todoLists: TodoList[],
  translations: TranslationData,
  showAutoAddInfo: boolean = true,
): string {
  if (items.length === 0) {
    const noItemsMessage = TranslationManager.localize(
      translations,
      'items.no_items',
      undefined,
      'No items in inventory',
    );
    return `<div class="no-items">${noItemsMessage}</div>`;
  }

  if (sortMethod === 'category') {
    return createItemsByCategory(items, todoLists, translations, showAutoAddInfo);
  }

  if (sortMethod === 'location') {
    return createItemsByLocation(items, todoLists, translations, showAutoAddInfo);
  }

  return items.map((item) => createItemRowTemplate(item, todoLists, translations, showAutoAddInfo)).join('');
}

export function createItemsByCategory(
  items: InventoryItem[],
  todoLists: TodoList[],
  translations: TranslationData,
  showAutoAddInfo: boolean = true,
): string {
  const grouped = Utilities.groupItemsByCategory(items);
  const sortedCategories = Object.keys(grouped).sort();

  return sortedCategories
    .map(
      (category) => {
        // Sort items alphabetically within each category
        const sortedItems = grouped[category].sort((a, b) => a.name.localeCompare(b.name));
        const itemCount = sortedItems.length;

        return `
        <div class="${CSS_CLASSES.CATEGORY_GROUP}">
          <div class="${CSS_CLASSES.CATEGORY_HEADER}">
            <span class="category-name">${category}</span>
            <span class="category-count">${itemCount} ${TranslationManager.localize(translations, 'items.count', undefined, 'item')}${itemCount !== 1 ? 's' : ''}</span>
          </div>
          ${sortedItems.map((item) => createItemRowTemplate(item, todoLists, translations, showAutoAddInfo)).join('')}
        </div>
        `;
      },
    )
    .join('');
}

export function createItemsByLocation(
  items: InventoryItem[],
  todoLists: TodoList[],
  translations: TranslationData,
  showAutoAddInfo: boolean = true,
): string {
  const grouped = Utilities.groupItemsByLocation(items);
  const sortedLocations = Object.keys(grouped).sort();
  return sortedLocations
    .map(
      (location) => `
        <div class="${CSS_CLASSES.LOCATION_GROUP}">
          <div class="${CSS_CLASSES.LOCATION_HEADER}">${location}</div>
          ${grouped[location].map((item) => createItemRowTemplate(item, todoLists, translations, showAutoAddInfo)).join('')}
        </div>
`,
    )
    .join('');
}
