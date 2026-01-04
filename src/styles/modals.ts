import { CSSResult, css } from 'lit-element';

export const modalStyles: CSSResult = css`
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }

  .modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: var(--card-background-color);
    padding: 32px;
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--divider-color);
  }

  .modal-header h3 {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
    margin: 0;
  }

  .modal-title {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
  }

  .modal-buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    justify-content: flex-end;
  }

  .modal-buttons button {
    padding: 12px 24px;
    min-width: 100px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .modal--light .modal-content {
    background: rgba(28, 28, 28, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 24px;
    border-radius: 18px;
    max-width: 520px;
  }

  .modal--light .modal-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    margin-bottom: 18px;
    padding-bottom: 12px;
  }

  .modal--light .modal-title {
    font-size: 1.15em;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
  }

  .modal--light .modal-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .modal--light .form-row {
    gap: 12px;
    margin-bottom: 12px;
  }

  .modal-advanced {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 0;
    background: rgba(255, 255, 255, 0.03);
  }

  .modal-advanced summary {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
  }

  .modal-advanced summary::-webkit-details-marker {
    display: none;
  }

  .modal-advanced .advanced-icon {
    display: inline-flex;
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85em;
    transition: transform 0.2s ease;
  }

  .modal-advanced[open] .advanced-icon {
    transform: rotate(180deg);
  }

  .modal-advanced-content {
    padding: 0 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .modal-buttons--light {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .modal-buttons--light .modal-primary {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.85);
    border-radius: 14px;
  }

  .modal-buttons--light .modal-secondary {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 14px;
  }
`;
