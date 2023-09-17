import { MouseEvent } from 'react';
import PropTypes from 'prop-types';

type ReusableButtonProps = {
  variant: string; // Use a string directly for the Tailwind CSS class
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset'; // Specify the exact values for the type
  disabled?: boolean;
};

/**
 * Reusable Button Component
 *
 * @param {string} variant - The Tailwind CSS class for styling the button
 * @param {string} label - The label text for the button
 * @param {function} onClick - The function to be called when the button is clicked
 * @param {string} type - The type attribute for the button (e.g., 'button', 'submit', 'reset')
 * @param {boolean} disabled - Specifies whether the button should be disabled
 * @returns {JSX.Element} - The Button component
 */
const ReusableButton: React.FC<ReusableButtonProps> = ({
  variant,
  label,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded ${variant} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-80'}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

ReusableButton.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default ReusableButton;
