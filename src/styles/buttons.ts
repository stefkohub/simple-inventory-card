import { CSSResult, css } from 'lit-element';

/*
    display: var(--ha-icon-display,inline-flex);
    align-items: center;
    justify-content: center;
    position: relative;
    vertical-align: middle;
    fill: var(--icon-primary-color,currentcolor);
    width: var(--mdc-icon-size,24px);
    height: var(--mdc-icon-size,24px);


  .add-new-btn {
    padding: 12px 16px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
*/

export const buttonStyles: CSSResult = css`
  button {
    padding: 14px 24px;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 48px;
  }

  .primary-btn,
  .save-btn {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .primary-btn:hover,
  .save-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--rgb-primary-color), 0.3);
  }

  .add-new-btn {
    padding: 10px 18px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    color: var(--primary-text-color);
    border: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .add-new-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .add-new-btn:active {
    transform: translateY(0);
  }

  .add-new-btn-full {
    width: 100%;
    margin-top: 8px;
  }

  .control-btn {
    padding: 8px 12px;
    font-size: 16px;
    font-weight: bold;
    min-width: 40px;
    min-height: 40px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .control-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background: var(--disabled-color, #ccc);
    transform: none;
    box-shadow: none;
  }

  .btn-icon {
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02),
      0 6px 14px rgba(0, 0, 0, 0.3);
  }

  .btn-icon:hover {
    transform: translateY(-1px);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05),
      0 10px 20px rgba(0, 0, 0, 0.4);
  }

  .btn-icon:active {
    transform: translateY(0);
  }

  .btn-edit {
    background: rgba(255, 255, 255, 0.02);
    color: rgba(255, 255, 255, 0.85);
    border-color: rgba(255, 255, 255, 0.15);
  }

  .btn-decrement {
    background: rgba(48, 24, 21, 0.7);
    color: #ff7b6c;
    border-color: rgba(255, 123, 108, 0.45);
  }

  .btn-decrement:disabled {
    background: rgba(255, 255, 255, 0.02);
    color: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.06);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .btn-increment {
    background: rgba(17, 36, 54, 0.7);
    color: #3cb0ff;
    border-color: rgba(60, 176, 255, 0.45);
  }

  .btn-remove {
    background: rgba(55, 22, 20, 0.75);
    color: #ff5c4d;
    border-color: rgba(255, 92, 77, 0.5);
  }

  .btn-icon-text {
    font-size: 18px;
    line-height: 1;
  }

  .add-btn {
    width: 100%;
    margin-top: 8px;
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  .edit-btn {
    padding: 6px 8px;
    font-size: 12px;
    min-width: auto;
    min-height: auto;
    background: var(--secondary-color, #f0f0f0);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }

  .edit-btn:hover {
    background: var(--primary-color);
    color: var(--text-primary-color);
  }

  .toggle-btn {
    padding: 12px 16px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .toggle-btn:hover {
    opacity: 0.9;
  }

  .toggle-btn.has-active-filters {
    background: var(--warning-color, #ff9800) !important;
    position: relative;
  }

  .toggle-btn.has-active-filters::after {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    background: var(--error-color, #f44336);
    border-radius: 50%;
    border: 2px solid var(--card-background-color, white);
  }

  .cancel-btn {
    background: var(--secondary-background-color, #f0f0f0);
    color: var(--primary-text-color);
    border: 2px solid var(--divider-color, #e0e0e0);
  }

  .cancel-btn:hover {
    background: var(--primary-background-color);
    transform: translateY(-1px);
  }

  .close-btn {
    background: transparent;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: var(--secondary-text-color);
    padding: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    min-height: auto;
  }

  .close-btn:hover {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
  }
`;
