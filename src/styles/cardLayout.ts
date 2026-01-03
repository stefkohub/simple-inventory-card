import { CSSResult, css } from 'lit-element';

export const cardLayoutStyles: CSSResult = css`
  ha-card {
    padding: 18px;
    border-radius: 24px;
    background: radial-gradient(120% 120% at 8% 0%, #1b1b1b 0%, #0f0f0f 70%);
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .inventory-title {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    color: var(--primary-text-color);
  }

  .no-items {
    text-align: center;
    color: var(--secondary-text-color);
    padding: 20px;
  }

  .active-filters {
    display: block;
    padding: 8px 16px;
  }

  .items-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .filter-badges-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .filter-badge {
    display: inline-block;
    padding: 4px 12px;
    margin: 2px;
    color: white;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .filter-badge.search {
    background: var(--purple-color, #9c27b0);
  }

  .filter-badge.category {
    background: var(--orange-color, #ff9800);
  }

  .filter-badge.location {
    background: var(--blue-color, #2196f3);
  }

  .filter-badge.category,
  .filter-badge.location {
    font-style: normal !important;
    opacity: 1 !important;
  }

  .filter-badge.quantity {
    background: var(--green-color, #4caf50);
    color: white !important;
  }

  .filter-badge.expiry {
    background: var(--red-color, #ff5722);
    border-radius: 12px !important;
  }

  .category-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 4px 12px;
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.85em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .category-label {
    opacity: 0.7;
  }

  .category-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .category-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: 0.02em;
    text-transform: none;
    font-size: 0.95em;
  }

  .category-pill .category-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3cb0ff;
    display: inline-block;
  }

  .category-pill .category-count {
    opacity: 0.7;
    font-weight: 600;
    background: transparent;
    border: none;
    padding: 0;
  }
`;
