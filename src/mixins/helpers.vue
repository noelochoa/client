<script>
const moment = require("moment");
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;

export default {
  data() {
    return {
      prevRoute: null
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },
  computed: {
    today() {
      const d = new Date();
      const today = {
        month: d.toLocaleDateString("en-US", { month: "long" }),
        year: d.getFullYear(),
        dayOfMonth: d.getDate(),
        dayOfWeek: d.getDay(),
        human: d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric"
        }),
        iso: d.toISOString(),
        yyyymmdd:
          d.getFullYear() +
          "-" +
          (d.getMonth() + 1).toString().padStart(2, 0) +
          "-" +
          d
            .getDate()
            .toString()
            .padStart(2, "0")
      };
      return today;
    },
    startDayOfMonth() {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth(), 1);
    },
    lastDayOfMonth() {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth() + 1, 0);
    }
  },
  methods: {
    // Replace all occurrences of search from txt
    replaceAll: function(txt, search, replace) {
      if (!txt) return txt;
      return txt.toString().replace(new RegExp(search, "g"), replace);
    },

    //change time to elapsed ( X time ago )
    toTimeElapsed(date) {
      if (date) {
        return moment(date).fromNow();
      }
      return "";
    },

    toHumanDate(date) {
      if (date) {
        return moment(date).format("MMM D, YYYY");
      }
      return "";
    },

    toHumanDatetime(date) {
      if (date) {
        return moment(date).format("MMM D, YYYY HH:mm");
      }
      return "";
    },
    censorTxt(txt) {
      if (txt) {
        return txt.substring(0, 1).padEnd(txt.length, "*");
      }
      return "";
    },

    // Uploaded Assets URL
    resolveAssetsUrl(file) {
      if (!file) return file;
      file = this.replaceAll(file, /\\/, "\/");
      return process.env.STATIC_URL + "/" + file;
    },

    // Notification
    showNotif: function(type, msg) {
      this.$q.notify({
        type: type,
        timeout: "3000",
        position: "top",
        message: msg
      });
    },

    // Compute new price
    calcPrice(base, discount) {
      if (discount) {
        const finalPrice = (base - (base * discount) / 100).toFixed(0);
        return finalPrice;
      }
      return base;
    },

    // Falsey check
    isEmpty(obj) {
      if (typeof obj == "undefined") return true;
      if (obj == null) return true;
      if (obj.length == 0) return true;
      for (let key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
      }
      return true;
    },

    // Scroll Helpers
    _disableScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
      };
    },

    _enableScroll() {
      window.onscroll = function() {};
    },

    scrollToElement(el, time = 0) {
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = time;
      setScrollPosition(target, offset, duration);
    }
  }
};
</script>
