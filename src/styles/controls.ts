import { CSSResult, css } from 'lit-element';

export const controlStyles: CSSResult = css`
  .controls-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 8px;
    flex-wrap: wrap;
  }

  .controls-row--search {
    padding: 12px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .controls-row .sorting-controls {
    flex: 1;
    margin-bottom: 0;
  }

  .search-controls {
    margin-bottom: 20px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .search-controls--inline {
    margin-bottom: 0;
    flex: 1;
    min-width: 0;
    padding: 0;
    background: transparent;
    border: none;
  }

  .search-controls--full {
    width: 100%;
  }

  .search-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 0;
  }

  .search-row input {
    flex: 1;
    min-width: 0;
    min-height: 44px;
  }

  .search-row input.has-value {
    border-color: var(--warning-color, #ff9800);
    box-shadow: 0 0 0 1px var(--warning-color, #ff9800);
  }

  .sorting-controls {
    margin-bottom: 20px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sorting-controls label {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    margin-bottom: 0;
  }

  .sorting-controls select {
    flex: 1;
    max-width: 200px;
  }

  .advanced-filters {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .filter-row {
    display: flex;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 120px;
    flex: 1;
  }

  .filter-group label {
    font-size: 0.9em;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.55);
  }

  .filter-actions {
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }

  .filter-actions button {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  #apply-filters {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
  }

  #clear-filters {
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  #apply-filters:hover,
  #clear-filters:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;
