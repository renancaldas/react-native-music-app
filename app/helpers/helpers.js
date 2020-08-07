const titleStyle = 'background: blue; color: white;';

export const prettyLog = (title, message) => {
  console.log(`%c` + title + '%c ' + message, titleStyle, null);
};
