interface PageInfo {
  title: string;
}
 
type Page = "home" | "about" | "contact";

type MyRecord<T extends string | number | symbol, P> = {
  [K in T]: P
}
 
const nav: MyRecord<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
 
nav.about;