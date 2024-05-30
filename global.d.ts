type MessagesEn = typeof import("./messages/en.json");
type MessagesEs = typeof import("./messages/es.json");

declare interface IntlMessages extends MessagesEn, MessagesEs {}
