import sanitizeHTML from "sanitize-html";
import inject from "./inject";

// export default async ({ app, Vue }) => {
//   Vue.prototype.$sanitize = sanitizeHTML;
// };
export default inject(async function() {
  return {
    sanitize: sanitizeHTML
  };
});
