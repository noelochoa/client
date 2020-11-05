<script>
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
    // Scroll
    scrollToElement(el) {
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 750;
      setScrollPosition(target, offset, duration);
    }
  }
};
</script>
