import { CSSResult, css } from 'lit-element';

/*.item-row {
    display: flex;
    flex-direction: column;
    padding: 14px 16px;
    margin-bottom: 10px;
    border: 1px solid var(--divider-color, #e8e8e8);
    border-radius: 10px;
    background: var(--card-background-color, #fff);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
    gap: 10px;
  }
  .item-row.auto-add-enabled {
    border-left: 4px solid var(--success-color, #4caf50);
  }  
  
  */

export const itemRowStyles: CSSResult = css`
  .item-row {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) auto auto;
    align-items: center;
    padding: 14px 16px;
    gap: 16px;
    font-size: 1.02rem;
    line-height: 1.45;
    color: var(--primary-text-color);
    min-height: 58px;
    border-radius: 18px;
    background: rgba(15, 15, 15, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.02),
      0 10px 24px rgba(0, 0, 0, 0.35);
  }

  .item-row:hover {
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.05),
      0 16px 30px rgba(0, 0, 0, 0.45);
    transform: translateY(-1px);
  }

  .item-row.zero-quantity {
    opacity: 0.65;
    background: linear-gradient(90deg, rgba(14, 14, 14, 0.9), rgba(8, 8, 8, 0.95));
    border-color: rgba(255, 255, 255, 0.03);
  }

  .item-row--low {
    background: linear-gradient(90deg, rgba(49, 33, 18, 0.85), rgba(34, 24, 14, 0.9));
    border-color: rgba(255, 166, 49, 0.2);
  }

  .item-row--expired {
    border-color: rgba(255, 107, 95, 0.4);
  }

  .item-row--expiring {
    border-color: rgba(255, 178, 74, 0.4);
  }

  .item-main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto auto auto;
    column-gap: 10px;
    row-gap: 6px;
    min-width: 0;
  }

  .item-name-row {
    display: flex;
    align-items: center;
    min-width: 0;
    grid-column: 1;
    grid-row: 1;
  }

  .item-name {
    font-weight: 600;
    font-size: 1.05em;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    line-height: 1.1;
  }

  .item-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.72em;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    background: rgba(255, 166, 49, 0.18);
    color: #ffb248;
    border: 1px solid rgba(255, 166, 49, 0.35);
    white-space: nowrap;
    line-height: 1;
    height: 22px;
    min-width: 68px;
    align-self: center;
    width: 92px;
  }

  .item-badges {
    grid-column: 2;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 40px;
    gap: 2px;
  }

  .item-badge-slot {
    min-height: 22px;
    display: flex;
    align-items: center;
    width: 92px;
    justify-content: flex-end;
  }

  .item-badge--location {
    min-width: 0;
    padding: 4px 10px;
    background: var(--location-bg, rgba(60, 176, 255, 0.15));
    color: var(--location-color, #6cc0ff);
    border: 1px solid var(--location-border, rgba(60, 176, 255, 0.35));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.75em;
  }

  .item-subline {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85em;
    grid-column: 1;
    grid-row: 2;
  }

  .item-meta-tag {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
  }

  .item-meta-text {
    font-weight: 500;
  }

  .item-meta-sep {
    opacity: 0.4;
  }

  .item-expiry-text {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .item-expiry-icon {
    font-size: 0.95em;
    line-height: 1;
  }

  .item-expiry-text--expired {
    color: #ff6b5f;
  }

  .item-expiry-text--expiring-soon,
  .item-expiry-text--expires-today {
    color: #ffb24a;
  }

  .item-expiry-text--expiry-safe {
    color: rgba(255, 255, 255, 0.55);
  }

  .item-info-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 0.75em;
    color: rgba(255, 255, 255, 0.6);
    grid-column: 1 / -1;
    grid-row: 3;
  }

  .item-pill {
    padding: 3px 9px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .item-badge {
      padding: 5px 12px;
      font-size: 0.78em;
      height: 24px;
      min-width: 74px;
      width: 98px;
    }

    .item-badge-slot {
      min-height: 24px;
      width: 98px;
    }

    .item-badge--location {
      padding: 5px 12px;
      font-size: 0.8em;
    }

    .item-pill {
      padding: 4px 10px;
      font-size: 0.9em;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .item-badge {
      padding: 5px 11px;
      font-size: 0.76em;
      height: 23px;
      min-width: 72px;
      width: 96px;
    }

    .item-badge-slot {
      min-height: 23px;
      width: 96px;
    }

    .item-badge--location {
      padding: 5px 11px;
      font-size: 0.78em;
    }

    .item-pill {
      padding: 4px 10px;
      font-size: 0.88em;
    }
  }

  .item-controls {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    align-items: center;
  }

  .item-qty {
    min-width: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    font-weight: 700;
    color: #eaeaea;
  }

  .item-qty.is-zero {
    color: rgba(255, 255, 255, 0.35);
  }

  .qty-value {
    font-size: 1.3em;
    letter-spacing: 0.02em;
  }

  .qty-unit {
    font-size: 0.7em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0.08em;
  }

  .expiry {
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 999px;
  }

  .expiry.expired {
    color: #ff6b5f;
    background-color: rgba(255, 107, 95, 0.15);
    border: 1px solid rgba(255, 107, 95, 0.4);
  }

  .expiry.expires-today,
  .expiry.expiring-soon {
    color: #ffb24a;
    background-color: rgba(255, 178, 74, 0.15);
    border: 1px solid rgba(255, 178, 74, 0.35);
  }

  .expiry.expiry-safe {
    color: #6fd391;
    background-color: rgba(111, 211, 145, 0.15);
    border: 1px solid rgba(111, 211, 145, 0.35);
  }

  .auto-add-info {
    color: rgba(255, 255, 255, 0.65);
    font-weight: 600;
  }

  .category-group {
    margin-bottom: 16px;
  }

  .location-group {
    margin-bottom: 20px;
  }

  .category-header {
    font-weight: 600;
    font-size: 0.8em;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
    margin: 8px 0 6px;
    padding: 6px 0;
    background: transparent;
    border-radius: 0;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    position: relative;
  }

  .category-toggle {
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.4em;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .category-toggle:hover {
    color: rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.16);
  }

  .category-group.is-collapsed .item-row {
    display: none;
  }

  .category-name {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
  }

  .category-count {
    font-size: 0.75em;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    background: transparent;
    padding: 0;
    border-radius: 0;
    border: none;
    min-width: 20px;
    text-align: center;
  }

  .location-header {
    font-weight: bold;
    font-size: 1.1em;
    color: var(--primary-color);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    border-left: 4px solid var(--primary-color);
  }
`;
