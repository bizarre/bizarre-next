import * as styles from "./tinkerer.css";
import config, { _app_defs } from "@/config";
import { Header } from "@/app/app-header/app-header";

export const TinkererPage = () => {
  return (
    <>
      <Header
        name={config.name}
        pseudonym={config.pseudonym}
        tagline={config.tagline}
        pages={_app_defs.pages}
        socials={config.socials}
      />
    </>
  );
};
