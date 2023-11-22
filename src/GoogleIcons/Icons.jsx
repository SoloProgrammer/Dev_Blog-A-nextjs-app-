function returnIconSpan(iconName, classes, handleFunc) {
  return (
    <span
      onClick={handleFunc}
      className={`material-symbols-outlined ${classes.join(" ")}`}
    >
      {iconName}
    </span>
  );
}

const defaultFunc = () => {};

export const ImageIcon = ({ classes, handleFunc }) =>
  returnIconSpan("image", classes, handleFunc);

export const UploadIcon = ({ classes, handleFunc = defaultFunc }) =>
  returnIconSpan("upload", classes);

export const VideoIcon = ({ classes, handleFunc = defaultFunc }) =>
  returnIconSpan("smart_display", classes);

export const XMarkIcon = ({ classes = [], handleFunc = defaultFunc }) =>
  returnIconSpan("close", classes);
