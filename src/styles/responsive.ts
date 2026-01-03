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

    .item-controls {
      gap: 4px;
    }

    .btn-icon {
      width: 32px;
      height: 32px;
      font-size: 14px;
    }

    .btn-icon-text {
      font-size: 12px;
    }

    .category-header {
      padding: 8px 12px;
      font-size: 1em;
    }

    .category-count {
      font-size: 0.8em;
      padding: 1px 6px;
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

  @media (min-width: 768px) {
    .item-row {
      flex-wrap: nowrap;
    }

    .add-btn {
      width: auto;
      margin-top: 0;
    }
  }
`;
