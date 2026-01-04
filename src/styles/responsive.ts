import { CSSResult, css } from 'lit-element';

export const responsiveStyles: CSSResult = css`
  @media (max-width: 768px) {
    .controls-row {
      flex-direction: column;
      align-items: stretch;
    }

    .add-new-btn {
      width: 100%;
      margin-top: 8px;
    }

    .item-row {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 12px 14px;
    }

    .item-main {
      gap: 6px;
    }

    .item-qty {
      flex-direction: row;
      justify-content: flex-start;
      gap: 8px;
      min-width: 0;
    }

    .item-controls {
      gap: 6px;
      justify-content: space-between;
    }

    .btn-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      font-size: 16px;
    }

    .btn-icon-text {
      font-size: 14px;
    }

    .category-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }

    .category-pills {
      gap: 6px;
    }

    .category-pill {
      padding: 4px 10px;
      font-size: 0.9em;
    }

    .modal-content {
      padding: 24px;
      margin: 16px;
      width: calc(100% - 32px);
      border-radius: 12px;
    }

    .form-row {
      flex-direction: column;
      gap: 12px;
    }

    .modal-buttons {
      flex-direction: column-reverse;
    }

    .modal-buttons button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .item-row {
      padding: 10px 12px;
    }

    .item-name {
      font-size: 1em;
    }

    .item-badge {
      min-width: 44px;
      height: 16px;
      font-size: 0.58em;
      padding: 2px 6px;
    }

    .item-controls {
      gap: 4px;
    }

    .btn-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      font-size: 14px;
    }

    .btn-icon-text {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    .add-btn {
      width: auto;
      margin-top: 0;
    }
  }
`;
