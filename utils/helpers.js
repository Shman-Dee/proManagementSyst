module.exports = {
  project_tease: (str) => {
    const first100 = str.slice(0, 100);
    return first100;
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};
