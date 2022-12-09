import * as styles from "./layout.css";
import { TwoPaneFlexView } from "@app/two-pane-flex-view/two-pane-flex-view";
import { TinkererPage } from "./tinkerer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <TwoPaneFlexView pane={<TinkererPage />}>
      <div className={styles.wrapper}>{children}</div>
    </TwoPaneFlexView>
  );
}
