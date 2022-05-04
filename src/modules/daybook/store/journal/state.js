export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Dolor est enim ex minim duis enim veniam irure cupidatat excepteur.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Ut ad velit ex et velit labore ut fugiat est. Culpa laborum proident.",
      picture: null,
    },

    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Id culpa nostrud cillum nostrud pariatur excepteur fugiat sit duis mollit.",
      picture: null,
    },
  ],
});
