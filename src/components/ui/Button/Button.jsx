import clsx from 'clsx'
import './Button.styles.scss'

const Button = ({
  as: Component = 'button',
  to,
  children,
  variant = 'light', // light, light-inverted, dark, dark-inverted, accent, glass
  size = 'lg', // lg, sm
  font = 'primary', // primary, secondary
  disabled = false,
  type = 'button', 
  onClick,
  className,
  ref
}) => {
  return (
    <Component
      {...(Component === 'button' ? { type } : {})}
      {...(Component !== 'button' ? { to } : {})}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        `btn--font-${font}`,
        {
          'btn--disabled': disabled,
        },
        className
      )}
      ref={ref}
    >
      {children}
    </Component>
  )
}

export default Button
