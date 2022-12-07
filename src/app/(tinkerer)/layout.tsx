import { TwoPaneFlexView } from "@app/two-pane-flex-view/two-pane-flex-view";
import { TinkererPage } from "./tinkerer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <TwoPaneFlexView pane={<TinkererPage />}>{children}</TwoPaneFlexView>;
}
