import { TemplateResult, CSSResult, LitElement, html } from 'lit-element';
import { HomeAssistant, InventoryConfig } from '../types/homeAssistant';
import { Utilities } from '../utils/utilities';
import {
  createEntitySelector,
  createEntityInfo,
  createNoEntityMessage,
  createDebugToggle,
  createHeaderToggle,
  createAddButtonToggle,
  createAddModalVariantToggle,
  createEditModalVariantToggle,
  createTransparentCardToggle,
} from '../templates/configEditor';
import { configEditorStyles } from '../styles/configEditor';
import { TranslationData } from '@/types/translatableComponent';
import { TranslationManager } from '@/services/translationManager';

class ConfigEditor extends LitElement {
  public hass?: HomeAssistant;
  private _config?: InventoryConfig;
  private _translations: TranslationData = {};

  constructor() {
    super();
  }

  static get properties() {
    return {
      hass: { type: Object },
      _config: { type: Object },
    };
  }

  async firstUpdated() {
    await this._loadTranslations();
  }

  async updated(changedProps: Map<string | number | symbol, unknown>) {
    if (changedProps.has('hass') && this.hass) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (
        !oldHass ||
        oldHass.language !== this.hass.language ||
        oldHass.selectedLanguage !== this.hass.selectedLanguage
      ) {
        await this._loadTranslations();
      }
    }
  }

  private async _loadTranslations(): Promise<void> {
    const language = this.hass?.language || this.hass?.selectedLanguage || 'en';
    try {
      this._translations = await TranslationManager.loadTranslations(language);
      this.requestUpdate();
    } catch (error) {
      console.warn('Failed to load translations:', error);
      this._translations = {};
    }
  }

  setConfig(config: InventoryConfig): void {
    const nextConfig: InventoryConfig = {
      show_header: true,
      show_add_button: false,
      use_light_add_modal: false,
      use_light_edit_modal: false,
      transparent_card: false,
      ...config,
    };
    if (!nextConfig.type) {
      nextConfig.type = 'custom:simple-inventory-card';
    }
    this._config = nextConfig;
    this.requestUpdate();
  }

  get _entity(): string {
    return this._config?.entity || '';
  }

  get _debug(): boolean {
    return this._config?.debug || false;
  }

  get _showHeader(): boolean {
    return this._config?.show_header ?? true;
  }

  get _showAddButton(): boolean {
    return this._config?.show_add_button ?? false;
  }

  get _useLightAddModal(): boolean {
    return this._config?.use_light_add_modal ?? false;
  }

  get _useLightEditModal(): boolean {
    return this._config?.use_light_edit_modal ?? false;
  }

  get _transparentCard(): boolean {
    return this._config?.transparent_card ?? false;
  }

  render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html`<div>
        ${TranslationManager.localize(
          this._translations,
          'common.loading',
          undefined,
          'Loading...',
        )}
      </div>`;
    }
    const inventoryEntities = Utilities.findInventoryEntities(this.hass);
    const entityOptions = Utilities.createEntityOptions(this.hass, inventoryEntities);

    if (!this._config.entity && inventoryEntities.length > 0) {
      const config: InventoryConfig = {
        ...this._config,
        type: this._config.type || 'custom:simple-inventory-card',
        entity: inventoryEntities[0],
      };

      this._config = config;

      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config },
          bubbles: true,
          composed: true,
        }),
      );
    }

    return html`
      <div class="card-config">
        ${createEntitySelector(
          this.hass,
          entityOptions,
          this._entity,
          this._valueChanged.bind(this),
          this._translations,
        )}
        ${createDebugToggle(
          this._debug,
          this._debugChanged.bind(this),
          this._translations,
        )}
        ${createHeaderToggle(
          this._showHeader,
          this._headerChanged.bind(this),
          this._translations,
        )}
        ${createAddButtonToggle(
          this._showAddButton,
          this._addButtonChanged.bind(this),
          this._translations,
        )}
        ${createAddModalVariantToggle(
          this._useLightAddModal,
          this._addModalVariantChanged.bind(this),
          this._translations,
        )}
        ${createEditModalVariantToggle(
          this._useLightEditModal,
          this._editModalVariantChanged.bind(this),
          this._translations,
        )}
        ${createTransparentCardToggle(
          this._transparentCard,
          this._transparentCardChanged.bind(this),
          this._translations,
        )}
        ${this._entity
          ? createEntityInfo(this.hass, this._entity, this._translations)
          : createNoEntityMessage(this._translations)}
      </div>
    `;
  }

  private _valueChanged(event_: CustomEvent): void {
    if (!this._config) {
      return;
    }

    const value = event_.detail?.value;

    if (this._entity === value) {
      return;
    }

    const config: InventoryConfig = {
      ...this._config,
      entity: value,
      type: this._config.type || 'custom:simple-inventory-card',
    };

    this._config = config;

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _getCheckedValue(event_: Event): boolean | undefined {
    const target = event_.target as HTMLInputElement | null;
    if (target && typeof target.checked === 'boolean') {
      return target.checked;
    }
    const currentTarget = event_.currentTarget as HTMLInputElement | null;
    if (currentTarget && typeof currentTarget.checked === 'boolean') {
      return currentTarget.checked;
    }
    return (event_ as CustomEvent).detail?.checked;
  }

  private _debugChanged(event_: CustomEvent): void {
    if (!this._config) {
      return;
    }

    const value = this._getCheckedValue(event_);
    if (value === undefined) {
      return;
    }

    if (this._debug === value) {
      return;
    }

    const config: InventoryConfig = {
      ...this._config,
      debug: value,
    };

    this._config = config;

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _headerChanged(event_: CustomEvent): void {
    if (!this._config) {
      return;
    }

    const value = this._getCheckedValue(event_);
    if (value === undefined) {
      return;
    }

    if (this._showHeader === value) {
      return;
    }

    const config: InventoryConfig = {
      ...this._config,
      show_header: value,
    };

    this._config = config;

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _addButtonChanged(event_: CustomEvent): void {
    if (!this._config) {
      return;
    }

    const value = this._getCheckedValue(event_);
    if (value === undefined) {
      return;
    }

    if (this._showAddButton === value) {
      return;
    }

    const config: InventoryConfig = {
      ...this._config,
      show_add_button: value,
    };

    this._config = config;

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _addModalVariantChanged(event_: CustomEvent): void {
    if (!this._config) {
      return;
    }

    const value = this._getCheckedValue(event_);
    if (value === undefined) {
      return;
    }

    if (this._useLightAddModal === value) {
      return;
    }

    const config: InventoryConfig = {
      ...this._config,
      use_light_add_modal: value,
    };

    this._config = config;

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _editModalVariantChanged(event_: CustomEvent): void {
    if (!this._config) {
      return;
    }

    const value = this._getCheckedValue(event_);
    if (value === undefined) {
      return;
    }

    if (this._useLightEditModal === value) {
      return;
    }

    const config: InventoryConfig = {
      ...this._config,
      use_light_edit_modal: value,
    };

    this._config = config;

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _transparentCardChanged(event_: CustomEvent): void {
    if (!this._config) {
      return;
    }

    const value = this._getCheckedValue(event_);
    if (value === undefined) {
      return;
    }

    if (this._transparentCard === value) {
      return;
    }

    const config: InventoryConfig = {
      ...this._config,
      transparent_card: value as boolean,
    };

    this._config = config;

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  static get styles(): CSSResult {
    return configEditorStyles;
  }
}

export { ConfigEditor };
