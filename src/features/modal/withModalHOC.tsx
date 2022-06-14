import { ComponentType, FC } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { FormNavigationButtons } from "../FormNavigateButtons/FormNavigateButtons";
import styles from "./modal.module.css";

export function withModal<P>(
  Inner: ComponentType<P>,
): ComponentType<P> {
  const Outer: FC<P> = ({ ...props }) => {
    const navigate = useNavigate();

    return (
      createPortal(
        (
          <div className={styles.wrapper}>
            <div className={styles.modal}>
              <Inner
                {...props}
              />

              <button
                className={styles.close}
                type="button"
                name="close"
                onClick={() => {
                  navigate("/");
                }
              }
              />

              <FormNavigationButtons />
            </div>
          </div>
        ),
        document.querySelector("#modals") as Element,
      )
    );
  };

  Outer.displayName = `withModal(${Inner.displayName || Inner.name || "Anonymous"})`;

  return Outer;
};