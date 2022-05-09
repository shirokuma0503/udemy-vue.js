export const countNumber = {
  data() {
    return {
      title: "welcome",
      subTitle: "WELCOME"
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
};