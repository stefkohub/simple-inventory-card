import { html, TemplateResult } from 'lit-element';
import { HomeAssistant } from '../types/homeAssistant';
import { TranslationManager } from '@/services/translationManager';
import { TranslationData } from '@/types/translatableComponent';

export function createEntitySelector(
  hass: HomeAssistant,
  entityOptions: Array<{ value: string; label: string }>,
  selectedEntity: string,
  onValueChanged: (event_: CustomEvent) => void,
  translations: TranslationData,
): TemplateResult {
  return html`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-combo-box
            .hass=${hass}
            .label=${TranslationManager.localize(
              translations,
              'config.inventory_entity_required',
              undefined,
              'Inventory Entity (Required)',
            )}
            .items=${entityOptions}
            .value=${selectedEntity}
            @value-changed=${onValueChanged}
          ></ha-combo-box>
        </div>
      </div>
    </div>
  `;
}

export function createEntityInfo(
  hass: HomeAssistant,
  entityId: string,
  translations: TranslationData,
): TemplateResult {
  const state = hass.states[entityId];
  const friendlyName = state?.attributes?.friendly_name || entityId;
  const itemCount = state?.attributes?.items?.length || 0;

  return html`
    <div class="entity-info">
      <div class="info-header">
        ${TranslationManager.localize(
          translations,
          'config.selected_inventory',
          undefined,
          'Selected Inventory:',
        )}
      </div>
      <div class="info-content">
        <strong>${friendlyName}</strong>
        <br />
        <small>${entityId}</small>
        <br />
        <small>
          ${TranslationManager.localize(translations, 'config.items_count', undefined, 'Items')}:
          ${itemCount}
        </small>
      </div>
    </div>
  `;
}

export function createDebugToggle(
  debug: boolean,
  onDebugChanged: (event_: CustomEvent) => void,
  translations: TranslationData,
): TemplateResult {
  return html`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-switch
            .checked=${debug}
            @change=${onDebugChanged}
          ></ha-switch>
          <label>
            ${TranslationManager.localize(
              translations,
              'config.debug_mode',
              undefined,
              'Debug Mode',
            )}
          </label>
        </div>
      </div>
    </div>
  `;
}

export function createHeaderToggle(
  showHeader: boolean,
  onHeaderChanged: (event_: CustomEvent) => void,
  translations: TranslationData,
): TemplateResult {
  return html`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-switch
            .checked=${showHeader}
            @change=${onHeaderChanged}
          ></ha-switch>
          <label>
            ${TranslationManager.localize(
              translations,
              'config.show_header',
              undefined,
              'Show Title and Subtitle',
            )}
          </label>
        </div>
      </div>
    </div>
  `;
}

export function createAddButtonToggle(
  showAddButton: boolean,
  onAddButtonChanged: (event_: CustomEvent) => void,
  translations: TranslationData,
): TemplateResult {
  return html`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-switch
            .checked=${showAddButton}
            @change=${onAddButtonChanged}
          ></ha-switch>
          <label>
            ${TranslationManager.localize(
              translations,
              'config.show_add_button',
              undefined,
              'Show Add Item Button',
            )}
          </label>
        </div>
      </div>
    </div>
  `;
}

export function createAddModalVariantToggle(
  useLightModal: boolean,
  onVariantChanged: (event_: CustomEvent) => void,
  translations: TranslationData,
): TemplateResult {
  return html`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-switch
            .checked=${useLightModal}
            @change=${onVariantChanged}
          ></ha-switch>
          <label>
            ${TranslationManager.localize(
              translations,
              'config.light_add_modal',
              undefined,
              'Use Light Add Popup',
            )}
          </label>
        </div>
      </div>
    </div>
  `;
}

export function createEditModalVariantToggle(
  useLightModal: boolean,
  onVariantChanged: (event_: CustomEvent) => void,
  translations: TranslationData,
): TemplateResult {
  return html`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-switch
            .checked=${useLightModal}
            @change=${onVariantChanged}
          ></ha-switch>
          <label>
            ${TranslationManager.localize(
              translations,
              'config.light_edit_modal',
              undefined,
              'Use Light Edit Popup',
            )}
          </label>
        </div>
      </div>
    </div>
  `;
}

export function createTransparentCardToggle(
  transparent: boolean,
  onToggleChanged: (event_: CustomEvent) => void,
  translations: TranslationData,
): TemplateResult {
  return html`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-switch
            .checked=${transparent}
            @change=${onToggleChanged}
          ></ha-switch>
          <label>
            ${TranslationManager.localize(
              translations,
              'config.transparent_card',
              undefined,
              'Transparent Card Background',
            )}
          </label>
        </div>
      </div>
    </div>
  `;
}

export function createNoEntityMessage(translations: TranslationData): TemplateResult {
  return html`
    <div class="no-entity">
      <ha-icon icon="mdi:information-outline"></ha-icon>
      <div>
        ${TranslationManager.localize(
          translations,
          'config.select_entity_message',
          undefined,
          'Please select an inventory entity above',
        )}
      </div>
    </div>
  `;
}
