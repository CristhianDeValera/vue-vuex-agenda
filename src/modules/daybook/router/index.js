export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "about" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/modules/daybook/view/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry-view",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/modules/daybook/view/EntryView.vue"
        ),
    },
  ],
};
