import React from 'react';

const ApacheSVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = ({
  height,
  width,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 128 128"
    className={className}
  >
    <path
      fill="#303284"
      d="M126.1 72.2l-.3-.5-.2-.1v-.4l-.1-.4-.2-.3-.4-.2-.1-.1-.3-.3-.3-.2-.4-.1h-.1l-.4-.3-.5-.3-.6-.3-.6-.2h-.1l-.5-.5-.6-.4-.6-.3-.6-.2h-.1l-.6-.4-.8-.3-.4-.1-.5-.3-.5-.2-.5-.1-.5-.1h-.5l-.6.1-.3-.5-.7-.4-.9-.2h-.9l-1 .2-.3.1-.7-.3-.8-.2-.8-.1h-.8l-.8.1h-.1l-.9-.3-.9-.3-.9-.1h-.6l-.8-.8-.9-.6-.8-.4-.8-.2h-.8l-.5.1-.5-.4-1-.4-.7-.1-.6.1-.7-.3-.7-.1-.7-.1H93l-1-.4-1.2-.3-1.1-.1h-.2l-1.1-.7-1.2-.3h-.8l-1.8-.4-1.1-.1H83l-.6-.6-.8-.5-.9-.1-.9.1-.6.2-.8-.1h-1.5.1v-.1l-1.7-.3-1.5-.2-1.3-.1H72l-1-.1-1-.1h-.1l-1.1-.4-1.1-.3-1-.1h-.8l-.9-.7-.9-.2-.9-.1H63l-1.1-.7-.9-.3-.7-.1-.8-.4-1.1-.3h-1l-1.1-.5-1-.2h-.5l-1.1-.6-1-.3-1-.1h-.2l-1.5-.7-1-.3-1.1-.1h-.1l-.7-.5-.6-.3-.6-.1-.7-.1-.6.1-.7-.5-.7-.3-1-.2h-.8l-.9.2-.1.1-1-.4-1-.3h-.9l-.9-.6-.7-.3-.8-.1-.7.1-.7.3-.6-.6-.7-.4-.8-.1-.6.1-.6.3-.4-.3-.3-.2-.3-.1-.4-.1h-.5l-.3.1-.5.3-.1.1-.8-.1H26l-.7.2-.6.5-.4.5-.3.8-.2.8-.2.8-.1.8-.1 1.6.3 1.3.3.7v.1c-1-.2-1.1-.3-1.6-.5l-.1-.6v-.6l.1-2.5v-.6l-.1-1.2-.1-.5-.2-.5-.2-.5-.2-.5-.3-.4-.3-.4-.8-.7v-.1l.1-.7.1-.3.2-.6-.4-.2-.5.6-.4.7-.3.7-.1.7-.1.6v.7l.1.7.1.3-.1-.2-.3-.4-.4-.9-.2-.5-.1-.6-.1-1.2-.9.8-.3.6-.2.7v.6l.1.6.2.6.3.6h-.1l-.6-.1-.1.4.4.2 1.4 1 .3.3 2.2 2.5.1.1C15 50.6 9 47.9 1.7 44.4c1.5 2.5 7 5.1 9.3 6.8 2.3 1.2 5.5 2.6 8.3 3.7l-2.3.5-1.4.3-1.4.5-.7.3-.5.5-.6.4-.5.4-.5.5-.4.5-.3.6-.2.7.4.2.2-.2.7-.7.9-.6.9-.5.4-.1.3-.1 1.4-.3.6-.2 2.5-1.5.5-.3.4-.2.3-.1-.1-.2c.2.1.4.1.5.2l-.1.1-2.3 1.2-1.3.8-1.2.9-.7.5-.5.6-.3.6-.2.6-.1.7.1.7.4 1.1.6-1.2.4-.6.4-.5.4-.4.4-.3 1-.6v.1l-.1.8v.9l.1 1 .3 1.1h.4l.1-.5.4-1.5.2-.5.6-1.4 1-1.8 1.2-1.9c.3.1.7.2 1 .4l-.9 1.7-.3.6-.4.5-.2.7-.2.7-.1.7v.7l.1.6.3.6.5.6.8.5.7.2.2.5.4.5.4.4.4.3.4.2.4.3.9.3h.2v-.1l.4.5.6.4.8.2h.8l.7-.2.1.2.6.6.6.4.6.3.8.1h.6l.6.4.7.3.8.2.6.5.8.4 1 .2 1.1.1.1.1.7.6.8.4.7.3.9.1.8-.2.4.2.6.3.6.1h.6l.6-.1.3.2 1 .3 1.1.1 1.3-.1.3.2.9.3 1 .1 1.4-.1.9.3 1 .1 1.1-.1.4.3 1 .4 1.1.1 1.1-.1v-.1l.6.1h1l1.1-.2.6.2.8.2.8.1h1l.2.1 1 .3 1 .2 1.1.1 1.1-.1v-.1l.6.2.9.1.9.1v-.1l.6.2 1.2.2 1.3.1 1.4-.1.7.2.9.2.8.1h.9l.1.1.8.4.8.2h.8l.8-.2.7-.5.9.4 1.1.3h1.2v-.2h.3l1.1.1 1.1-.1 1.1-.4 1 .1h1.2l.9-.2.6.1h.7l1.5-.2.5.2.6.1.6-.1.5-.3h.1l.8.4.8.3h.8l.9-.3.8-.5.9-.6h.7l.9-.1.8-.1.5.2.8.1.8.1.8-.1.8-.2.2.1.9.2.8.1h.8l.7-.1.5-.4.3.1.5.2.5.1h.5l.5-.1.4-.2.7.1.8-.1.7-.3h.7l.6-.1.6-.3.5-.4h.6l.6-.1.5-.2.6-.3h.7l.3-.1.1-.1.3-.1.3-.2.2-.3.1-.3h.2l.4-.4.1-.3h.1l.1-.6zM17.2 56.5l-1.2.7-.5.2-.7.1-1.4.5-1 .5-.9.6-.1.1.4-.7.4-.5.5-.4.5-.4.6-.3.6-.3 1.3-.4 2.6-.6-1.1.9zm105 17.4l.9.5.4.2.1.2-.1.2h-.3l-.3-.2-.1-.1-.4-.1-1-.4-.3-.1-.7-.4-.3-.3-.1-.1-.2-.1-.6-.6-.1-.1 1.2.1.3.3.4.3.6.4.3.2.3.1zm-1.7-3.5l.5-.2.8-.2 1-.1h.4l.5.1.3.1.3.1h-.7l-.5.1h-.1l-.3.1-.7.2-.4.2-.6.3-.3.1-.1.1h-.1l-1.3-.2.1-.1.4-.4.3-.2.4-.2.1.2zm5.1 2.2l-.5-.1-1.4-.3 1-.2h.5l.3.1.2.3-.1.2zm-.4-1.1h-.5l-.4.1-1.5.4-.1.1-1.5-.3.2-.1 1.6-.7.4-.1.5-.1h.9l.2.1.1.2.1.3v.1zm-2.8-2.1l.2.1h-1l-.7.2h-.1l-.5.2h-.1l-.3.1-.5.2-.4.3-.3.3-.2.3-.8-.1h-.4l-.8-.1h-.3l-.4-.1.1-.2.3-.4.4-.4.4-.3.5-.3.5-.2.2-.1.7-.2.4-.1h.9l.8.1.4.1.6.2.4.4zm-1.9-1.1h-.9l-.6.1-.6.1-.3.1h-.2l-.4.1-.8.4-.3.2-.2.1-.1.1-.3.4-.1.1-.3.5-.2.3-2.2-.3-.5-.1h-.1l.6-.4.1-.1 1.7-1.1.7-.5 1.2-.6.6-.2.6-.1.6-.1h.6l.5.1.5.3.4.6zM118 67l-.5.1-.5.1-.5.2-1 .5-.9.6-.7.5-.5.3-1.1.8-.4.3-.3.2-2.5-.3.1-.1 1.8-1.3.6-.4 1.3-.7.7-.3.7-.3.7-.2h.7l.7.1h.5l.7-.1.7.2-.3-.2zm-3.4-1h1.6-.2l-.9.3-.9.3-.8.3-.8.4-1.5.9-1.8 1.2-.8.7-1.4-.2-.6-.1 1.4-.7 1.1-.6.9-.5 2.2-1.1.5-.2.5-.2 1-.3.5-.2zm-3.3-1h.8l.7.1.5.3.2.3-.3.1-.5.2-.7.3-.5.3-.9.4-2.7 1.5-1.2.6-1.2.6-.9-.1-1.6-.1-.7-.1 2.1-1.4 1.9-1.1 1.1-.5 1-.5 1.1-.4.9-.3.4-.1.5-.1zm-4.5-.3h.8l.8.1.7.2.1.1-.8.3-2.1 1-2.2 1.2-1.8 1.1-.7.5-.1.1-3-.3.2-.2.5-.5 1.3-1 1.5-1 1.5-.8.8-.3.8-.2.8-.2.9-.1zm-3-.5l.9.2.2.1-.8.3-.7.3-.7.3-.7.4-.6.4-1.1.8-1.3 1.1-.1.1-.3.3-.6.5-3.7-.5.1-.1.8-1 .6-.6.6-.6.6-.5.7-.4.7-.4.7-.3.5-.2.9-.2.9-.1h1.5l.9.1zM98.3 62h.7l.8.2.8.4.8.6.4.4h-.5l-.8.1-.8.2-.2.1h-.1l-.5.2-.6.2-.6.3-.5.3-.6.4-.6.5-.6.5-.6.6-.6.7-.1.3-.4.5-1.9-.3-.9-.1 1.7-2.1 1.2-1.3.7-.6.5-.4 1-.7.6-.3.6-.3.6-.2.5-.2zm-1.2-.4l.2.2-.6.2-.7.4-.8.5-.7.6-.7.7-.1.1-.2.2-.5.6-.5.5-.5.6-1.6 1.8-2.4-.3.1-.1 1-.9 1.9-1.9.4-.4 1.1-1 .5-.4.5-.4.5-.4 1.1-.6.5-.2.6-.1h.6l.3.3zm-3.2-.6l.7.2.2.1-.2.1-.7.4-.2.1-.7.4-.4.3-.3.2-.4.3-.5.4-.4.6-.3.3-.6.6-1.3 1.4-1.1 1.1-.5.4-2.2-.5-.9-.1 1.5-1.9.8-.9.8-.8.8-.7.5-.4.6-.4.7-.4h.1l.6-.3.1-.1.2-.1.6-.2.7-.1.6-.1.6.1v-.1h.1l.5.1zm-2.1-.5l-.7.2-.4.2h-.1l-.1.1h-.2l-.4.2-.2.1-.4.2-.7.5-.2.1-.1.1-.7.6-1.3 1.2-1.7 1.8-1 1.3-3.8-.4-.3-.1h-.3l.4-.3.7-.6 1.3-1.1.7-.7.4-.4 1.6-1.4.8-.6.8-.5.2-.1.7-.3.8-.3.9-.3.5-.1h.8l1.1.1.9.5zm-3.6-1l.5.3h-.1l-1 .2-1 .4-.9.5h-.1l-.5.3-.6.4-.6.4-.5.5-1.2 1.1-1.4 1.3-1.6 1.3-.7.5h-.9l-.6-.1-.6-.1-1-.2.3-.1.6-.4.6-.5 1-.9 3-2.6 1-.8 1.1-.7 1.1-.6 1.1-.4 1.1-.2h1l.9.4zm-4.7-.8l1.1.1.4.1-.4.1-1 .5-1 .5-.9.6-.9.6-.8.7-1.5 1.3-1.6 1.4-.1.1-.7.6-.7.5-.5.2H74l-1.2-.1h-.9l1.3-.9 1.6-1.4 1.6-1.5 1.6-1.3.8-.6.9-.5.9-.4.9-.3.7-.1 1.3-.2zm-2.1-1.1l.7.2.3.2-1 .4v.1h-.1l-.8.3-.8.3-.7.4-.7.4-1.3 1-3.3 3-1.5 1.2-.7.5h-1.2l-1.4-.1.1-.1.4-.3 1-.8 1-.8 2.8-2.4 1.3-1.1 1.5-1 .7-.5.8-.4.7-.4.7-.2.8-.1.7.2zm-4.7-.1h1.8l-.5.2-.9.6-1 .7-.7.6-.1.1-.7.6-3.4 2.9-1.2 1-1.1.8-.5.3h-.1l-1.8-.3H66l.4-.8.6-1 .7-.9.7-.8.8-.8.9-.7.9-.6.6-.4 1.4-.7.8-.3.2-.1.7-.2.9-.2h1.1zm-4.2-.7l1.2.1 1.3.1.5.1-.9.3-.6.2-.3.1-1 .4-1 .5-.3.2-.1.1-.7.4-.7.5-.7.5-.7.6-.6.6-.5.5-.5.7-.5.7-.5.8-.4.7h-.4l-.7-.2H64l-.4-.1h-.2l.4-.8.4-.7.8-1.4.3-.5.6-.8.6-.8.7-.7.7-.6.8-.5.6-.3.8-.3.9-.2.6-.1.9-.1zm-1.9-.2l-.3.1-1 .4-.2.1-.7.3-.6.4-.6.4-.5.4-.5.5-.4.5-.9 1.3-.5.9-.5.9-.3.7-.6.9-1.7-.3H61l.2-.7.6-1.4.4-.7.4-.6.5-.6.5-.6.6-.5.6-.5.7-.4.7-.4.7-.3.8-.3.8-.2.8-.1h1.1l.2-.2zm-2.9-.8l1 .3.2.1-.7.1-.9.2-.9.3-.8.4-.8.5-.8.5-.7.6-.6.7-.7.8-.5.9-.5.9-.4 1-.2.7-2.5-.4.3-.8.4-1 .5-1 .6-.9.6-.8.6-.7.7-.7.7-.6.6-.4h.1l.8-.4.7-.2.3-.1.9-.1h1l1 .1zm-2.9-.5l.1.1h-.2l-.9.3-.8.3-.2.1-.7.4-.7.5-.6.5-1 1.1-.4.6-.4.6-.6 1.2-.6 1.4-.4.9-1.6-.3-.8-.2.2-.4.3-.7.6-1.3.8-1.3.1-.2.5-.6.6-.7.7-.7.7-.6.7-.5.7-.4.7-.2.8-.2.8-.1.8.1.8.3zm-3.1-1.1l.5.3-1 .3-.7.3-.7.4-.7.5-.6.5-.5.5-.5.6-.5.6-.3.5-.2.2-.6.9-1 2.1-.3.9-1.6-.6 1.3-2.6.8-1.4.8-1.2.5-.7.6-.6.6-.6.6-.5.6-.4.6-.2.6-.1h.7v-.1h.4l.6.4zm-2.4-.8l.2.1-.3.1-.8.4-.8.5-.7.6-.7.8-.6.8-.6.9-.4.4-.2.3-1.3 2.2-.8 1.6-2.6-.5.2-.5.3-.6.9-1.6.6-.9.5-.7.4-.6 1.1-1.2.6-.6.6-.5.6-.4.4-.3.5-.2.9-.3h1l1 .2zm-2.7-.5l-.6.3-.2.1-.4.2-.9.7-.9.8-.8.9-.8.9-.1.2-.1.1-1 1.4-.4.7-.7 1.3-.3.6-.1.4-2-.5.4-.9 1-2 .5-.9.9-1.5.5-.7.2-.3.7-.7.7-.6.7-.5.7-.3.8-.2h.9l.9.2.4.3zm-5-1.4h.9l.9.3.5.2-.5.1-.5.2-.5.2-.5.5-.5.4-.4.4-.5.5-.3.5-.4.5-.6.9-.5.8-1 1.8-.7 1.1-.3 1-2.5-.5.6-1.3.4-.8.9-1.9.5-.9.6-.9.6-.8.7-.7.7-.6.7-.4.1-.1.7-.3.9-.2zm-1.8-.7l.8.4-.7.4h-.1l-.1.1-.1.1-.6.3-.6.5-.5.5-.9 1.1-.4.6-1.1 1.9-1.5 2.9-.3.6-.6-.1-1.6-.4h-.1l2.1-5.2.5-.9.3-.5.3-.4.4-.6.5-.5.4-.4.5-.3.7-.3.8-.1.9.1 1 .2zm-4-1.4l.6.2.5.2.1.1-.8.4-.6.4-.1.1-.2.1-.6.7-.6.8-.2.4-.1.2-.4.7-1.1 2.2-1.5 3.5-2.9-.9-.7-.1.6-1.5 1-2 .8-1.4.5-.7.5-.7.6-.6.6-.6.6-.5.6-.4.5-.3.4-.2.7-.2.6-.1.6.2zm-4.4-.9h.8l.8.1.7.3.3.2-.4.2-.2.1-.4.1-.8.4-.8.6-.8.7-.6.8-.7 1-.7 1.1-.7 1.3-.6 1.5-.3.9-.2.5-2.5-.7.1-1 .2-.8.3-1 .2-.5.5-1 .6-1 .6-.9.7-.8.8-.7.8-.6.7-.4 1.1-.4h.5zm-2.2-.2l.5.2-.1.1-.3.1-.9.5-.8.6-.7.7-.6.7-.7.8-.4.8-.4.8-.3.8-.1.3-.2.6-.1.4v.1l-.1.6-.1.5-.1.4v.2l-.4-.1-.9-.4-.6-.2.2-.5.3-.9.3-.9.7-1.8.6-1.4.3-.6.4-.6.4-.6.4-.5.4-.4.3-.2.5-.2.7-.1h.8l1 .2zm-4.7-1.1l.6-.1.7.1.6.2.3.2-.6.3-.1.1h-.1l-.6.5-.6.6-.5.7-.4.8-.1.4-.3.7-1.5 3.6-.2.7-.2.5-.5-.1-.3-.1-.8-.3-.8-.2.1-.8.2-1 .3-1 .3-1 .4-.9.4-.7.7-1 .8-.9.9-.8h.1l.6-.3.6-.2zm-3.4-.8l.6-.1.6.1.5.3.5.5-.3.2h-.1l-.7.5-.6.6-.6.7-.5.8-.2.3-.3.4-.3.6-.5 1.2-.4 1.3-.3 1.4-.1.5-.7-.2-1.3-.5.1-.5v-.2l.5-1.9.2-.6.4-1.1.5-1 .3-.5.6-.9.4-.4.7-.8.4-.3.6-.4zm-2.7-.2l.3-.1h.5l.3.1.3.1.2.2-.4.3-.6.6-.5.8-.5.9-.5.9-.4.9-.4 1-.3.9-.2.9-.1.6-.1.4h-.3l-.5-.2h-.1l.1-.6.3-1.4.3-1.2.4-1.3.4-1.1.4-.9.4-.7.4-.5.3-.3.3-.3zm-4.5 4.2l.1-.8.2-.7.2-.7.3-.6.3-.6.5-.4.6-.2h.7l.5.1-.3.4-.3.4-.5 1-.6 1.7-.6 2.4-.4 1.8-.6-.2-.1-2v-1.6zm-5.3-.4l-.5-.7.2.1.4.2.7.5.3.3.5.7.1.3.2.6-.4-.5-.9-1-.6-.5zm2.8 3v-1.3l.3 1.7-.2-.1-.1-.3zm-.1-6.6l.2.4.2.5.1.5.1.5.1 1.7-.1 2.2-.4-2.2-.1-.5-.1-1.5-.1-.6-.2-1-.1-.5.4.5zm-.8-.5l.1.6.1.6.1.6-.1-.3-.3-1-.1-.7v-.8l.2 1zm-1.3 1.5l-.2-.7V46l.2-.6.2-.6.3-.6.1-.2v1l.1 1.1.1.4.3 1 .2.6.1.2.1.3.1.6.1 1.1v.5l-.1-.2-.2-.6-.2-.5-.6-.8-.2-.1-.4-1.2zm-2.3-.3l-.1-.5V46l.1-.5.3-.5.1-.1v.3l.1.7.2.6.5 1 .3.4.7.9v.1l.2.7.1.2-.4-.5-.5-.3-.5-.2-.4-.2-.2-.4-.3-.6-.2-.5zM16 59.9l-.4.4-.4.4-.4.5-.4.6-.1.3-.1-.1-.1-.6.1-.5.2-.5.3-.5.4-.5.5-.5 1.2-.9 1.3-.8 2-1.1-.1.3-.8.5-.4.3-.4.4-.4.4-.3.5-.2.5-1.5.9zm3.5-2.7l-.5.7-.7.6.1-.2.3-.4.4-.4.4-.3zm.7-.1L19.1 59l-.9 1.9-.5 1.5v.1l-.2-1v-.8l.1-.7.2-.6.6-.4.9-.7.9-1.2.2-.4.1-.1-.3.5zm.6-1.2l.1-.3h.1l-.2.3zm1.1 7.6l-.4-.5-.3-.5-.2-.5v-.6l.1-.6.2-.7.5-1.3.3-.6.3-.5.5-1 .4.1.2.1-.1.6v.1l-.4.6-.3 1.4-.1 1.2v1.1l.1 1 .2.8.1.2-.4-.1-.7-.3zm3.5 2.7l-.3-.2-.3-.2-.3-.2-.3-.3-.3-.4-.1-.3-.2-.6-.4-1-.1-.5v-1l.2-2.1.1-.5.1-.5.1-.3.1-.3.2-.8 1.8.6-.3 1-.2 1.2-.1 1.2v.6l.1 1.2.2 1.3.1.3.3 1 .2.6-.6.2zm3.8 1.3l-.5.1h-.6l-.6-.2-.4-.4-.4-.5-.4-.7-.2-.8-.2-.8v-.1l-.1-.9-.1-.9v-1l.1-1.8.1-.8.2-.7.1-.4 1.9.7-.1.4-.3 1.3-.1 1.3v1.2l.1.6.2 1.2.3 1.2.5 1.1.4.7.1.2zm3.2 1.5l-.7-.1-.6-.3-.6-.4-.5-.4-.4-.6-.1-.2-.3-.6-.4-.8-.3-.9-.2-.9-.1-.9-.1-.9v-.9l.1-.9.2-.9.2-.6 2.3.7.1 4.2.1.6v.6l.1.8.1.8.2.7.2.7.3.6.3.5.2.2-.1-.1zm1.4.4l-.1-.1h.2l-.9-.5-.2-.2-.4-.5-.2-.5-.2-.5-.2-.7-.2-1.4-.1-1v-1.2l-.1-2.8v-.6l.5.2.3.1 1 .3v1.7l-.2 2.2v.4l.2 1 .2.9.1.6v.3l.2.9v.2l.2.6.3.6.2.3-.6-.3zm3.8 1.5l-.9-.2-.8-.3-.5-.4-.2-.2-.4-.5-.4-.7-.2-.6-.3-1.1-.1-.7V64l.1-1.5v-.9l-.2-1.3 1.7.5-.2.9-.1 1.1v1.4l.1.8.1.9.3.9.3.9.3.5.1.2.5 1 .6.9.6.8.1.1-.5-.3zm4.1 1.4H41l-.7-.3-.7-.4-.6-.4-.2-.2-.8-.9-.7-.9-.6-1-.2-.4-.3-.8-.3-1.1-.2-1.1-.1-1.1v-1.1l.1-1.1.1-.7 2.2.7v1.4l.1 1.4.3 1.6.2.8.3.8.1.1.1.3.4 1 .1.2.2.3.2.4.3.4.2.4.6.7.6.6.3.2-.3.2zm3.1.5h-.5l-.6-.1-.6-.2-.6-.4-.5-.4-.5-.5-.6-.7-.2-.3-.2-.4-.3-.5-.2-.5-.5-1.2-.2-.6-.1-.5-.2-1.1-.2-1.3-.1-1.4v-1.2l.6.2.6.2.6.2.6.2 1.1.3h.2l.2 2.6.1.5v.1l.2 1.9.1 1 .2.9.3.9.4.8.5.7.4.3.1.1-.1.4zm2 .5l-.9-.3-.7-.4-.2-.3-.3-.4-.4-.5-.3-.5-.2-.6-.2-.7-.2-.7-.1-.7-.2-1.5-.1-.7v-1.2l-.1-1.7v-.4l.4.1.3.1 1.6.4.2 2.1.1.7.1.7.1.7.3 1.3.2.6.2.6.1.2.4.9.5.8.6.7.5.5h-.7l-1 .2zm4.6.7l-.9-.1-.8-.3-.5-.3-.4-.4-.5-.5-.4-.6-.4-.6-.5-1-.3-.8v-.1l-.2-.9-.2-.9-.3-1.9-.2-2 .8.2.3.1.3.1h.3l.4.1h.2l-.1.9.2 1.1v.1l.1.3.3 1.4.2.8.3.8.1.3v.1l.1.3v.1l.2.5.3.7.3.6.7.9.4.4.4.3.2.2-.4.1zm3.3.4l-.9-.1-.8-.3-.8-.4-.6-.6-.6-.7-.5-.8-.4-.8-.1-.3-.3-.7-.3-.7-.3-1-.4-1.5-.1-.4-.2-1.2-.1-.6 2.2.6v.4l.2 1.2.4 1.4.6 1.5.3.8.2.4.2.4.6 1 .6 1 .5.6.2.3.1.1.1.1.5.4-.3-.1zm3.5.7l-.9-.1-.9-.3-.8-.5-.6-.6-.3-.4-1-1.2-.8-1.3-.2-.4-.3-.6-.4-1-.3-1-.3-.9-.3-1.8v-.1l1.7.4 1 .2.6 2.3.5 1.6.2.7.4.9.4.9.2.4.1.2.4.7.4.6.5.6.5.5.3.2h-.1zm2.7-.1H60l-.7-.1-.7-.3-.7-.6-.6-.6-.5-.8-.2-.4-.3-.6-.3-.8-.6-1.6-.5-1.8-.4-1.8 1.5.4.1.5.1.7.3 1.3.2.7.2.7.3.6.3.5.3.6v.2l.4.6.1.2.4.6.6.6.6.6.2.1.6.4.2.1zm2.6.3l-.8-.2-.7-.3-.7-.4-.4-.3-.1-.1-.5-.4-.5-.5-.4-.5-.4-.3-.1-.1-.5-.7-.3-.6-.1-.3-.4-.8-.3-.9-.3-1-.3-1-.1-.7 1.5.3.4.1.3.1.2.1.2.8v.2l.2 1 .3 1 .1.2.1.3.5 1.2.7 1.2.4.6.5.6.6.5.4.4.8.6.3.2.2.1-.8-.4zm5.1.7l-1-.1-1-.2-.9-.3-.9-.4-.5-.3-.8-.6-.7-.5-.3-.3-.5-.5-.6-.8-.5-.8-.4-.9-.3-.8-.6-2-.1-.4-.1-.4 2.3.4.1.6v.4l.1.3.1.2.1.2.1.2H62v.1l.4.7.5.9.5.8.6.8.6.7.7.7.7.6.8.5.8.5.3.2h.1l.6.3v.2zm.9-.2l-.9-.3-.5-.2-.7-.4-.7-.4-.6-.5-.6-.5-.6-.5-1-1.2-.2-.8-.4-.7-.3-.7-.3-.6-.1-.5-.2-.5v-.2l-.1-.6 1.9.3.7 1.7.4.9.5.8.4.8.3.6.8 1.1 1 1 .3.2.3.3.8.6.9.5.3.1-.5-.1-.9-.2zm5.8.7l-1.3-.1-1.1-.2-1-.3-.5-.2-.8-.4-.7-.4-.6-.5-.3-.2-.4-.4-.7-.7-.6-.8-.5-.8-.4-.5-1.7-3.5 1.5.2.9.1.4.9.3.6.9 1.5 1 1.3.5.6.6.6.6.5 1.3 1 .7.5.7.4.5.2.5.3.3.1.2.1-.3.1zm2.6.2l-.8-.2-.9-.3-.6-.2-.8-.4-.3-.2-.9-.5-.9-.6-.8-.7-.8-.7-.8-.8-.7-.8-.6-.8-.6-.9-.5-.9-.1-.1-.2-.6 1.8.2.6.1 1.1.9 1.1 1 1.1 1.2 1.7 1.9 2.1 2.1.1.1.1.1.2.2 1.3 1.1.1.1-1-.3zm4.8.9l-.7.4h-.7l-.7-.4-.8-.5-.8-.6-.8-.7-.8-.7V75L74 71.3l-1.8-1.9-.9-.9-.4-.3h.4l2.1.4 1.4 1.2 2 2 1.7 1.8.7.7.8.7.8.6.8.6.4.2.4.2.6.3.1.1-.4.6zm1.9-.5l-1-.3-.9-.4-.5-.2-.2-.1-.6-.4-.6-.4-1.2-1.1-2.3-2.3-1.4-1.5-.7-.8-.8-.7-.2-.2 1.8.2h.1l.3.1.3.1h.1l.5.3.6.6.7.7 2.4 2.7.9.9 1 .9 1 .9 1 .7.8.4-1.1-.1zm4.6.3l-1 .1-1-.2-.6-.3-.7-.4-.9-.6-.9-.6-.8-.7-.8-.7-.7-.7-1.3-1.3-.6-.7-1.1-1.3-.5-.5-.5-.4-.2-.1 1.7.2h.8l.7.6.7.7 2.8 3.1.7.7.1.1 1.1 1 .1.1.2.1.9.6.9.5 1 .4.3.1-.4.2zm2.2-.3l-1-.1-.5-.1-.5-.2-.8-.4-.8-.3-.7-.4-.5-.4-1.3-1.1-.3-.3-1-1.1-1.7-2-.6-.6-.9-.8h.5l.6.1 1.3.1.3.2 1 .2h.3l.2-.1.7 1 .8 1 .7.9.7.9 1.3 1.4.7.6.7.5.4.3.1.1.1.1.5.3.4.2h-.7zm3.3 0h-.6l-.3-.1v-.1h-.4l-.5-.1-.6-.2-.6-.3-.2-.2-.5-.4-.6-.5L89 74l-.6-.6-1.6-2-.4-.6-.7-1.1 2.3.3h1l.4.4 1.7 1.9.4.5.4.5.4.5 1.7 1.9 1.5 1.3-.8.1zm3.5-.1l-.2.1-.5.1-.5-.1-.6-.2-.6-.4-.6-.5-.6-.6-.6-.7-1.3-1.4-1.8-2.2-.5-.6-.5-.6 2.3.2 2.3 3 .2.3.1.1.1.2.1.1.9 1.1 1.4 1.3.7.5.2.3zm4.4-.3l-.8.4-.8.2h-.7l-.7-.1-.7-.2-.4-.2-.8-.6-1.4-1.3-1.1-1.2-.2-.3-.2-.3-2-3L94 70h.2l.7.3.5.8 1.1 1.5.6.6.4.4.3.3.3.3.2.2.2.2.5.4.2.1.3.2.9.5.2.1 1.1.4.5.2.5.1h.2l-.3.1zm1-.6l-.8-.1-.7-.2-.7-.2-.7-.3-1.1-.7-.9-.6-.4-.3-.3-.3-.5-.5-.5-.6-1.1-1.4-.2-.4 3.1.3.9 1.1 1.2 1.2.6.6.7.5 1.4 1 .8.5.7.4.2.1-.8.1-.9-.2zm4.6.3l-.7-.1-.7-.1-.2-.1-.9-.4-.7-.3-1.3-.8-.6-.4-1.7-1.4-.5-.5-1.4-1.5h1.1l1.3.1h.1l.4.4.1.1.4.4.6.5.7.6 1.8 1.3 1 .7.9.6.5.3.6.4-.8.2zm4.8.3l-.5.3h-.7l-.8-.3-.9-.4-.9-.5-.9-.5-.9-.6-4.7-3.6 2.7.2.7.4.4.2 3.4 2.4.5.3 1.2.8.9.6.4.3.2.2-.1.2zm2-.2l-.4-.1-.5-.1-.5-.2-.5-.3-.2-.1-2.7-1.8-1.7-1.1-.3-.2-.7-.4-.7-.5-.4-.5.1-.2h.5l1.4.3.3.3 1.6 1.5 1.3 1.1 1.5 1 .8.5.8.4.4.1h.1l.3.1-.5.2zm2.1-.2h-.8l-.6-.2-.4-.1-.5-.2-.6-.3-1.3-.8-1.8-1.3-1.4-1.2-.3-.3-.1-.1 1.1.1 1.7.1 2.1 1.9 1.6 1.3.8.5.9.4.2.1-.6.1zm2.7-.5l-.5.1h-.5l-.5-.1-.5-.2-.5-.2-.6-.3-.5-.4-1.1-.9-2.1-1.9 1 .1 1.2.1.1.2.3.5.1.2.4.4.4.4.5.4.5.3.2.1.1.1.2.1.1.1.2.1.4.2.4.1.9.2h.3l-.5.3zm2.4-.8h-2.3l-1.2-.3-.4-.2-.2-.1-.3-.1-.5-.3h-.1l-.9-.8-.2-.3-.1-.2-.2-.3-.1-.1.7.1 1.9.1.2.3.3.4.4.4.2.2.1.1.5.4.3.2.9.4.2.1.9.3-.1-.3zm2.7-1l-.1.2-.1.1h-.2l-.6-.2-.7-.3-1-.6-1-.7 1.4.2 1.6.8.2.1.2.1.2.1.1.1h.1l-.1.1zm.6-.7l-.1.1h-.3l-.7-.2-.6-.3 1.2.1h.1l.5.1-.1.2z"
    ></path>
  </svg>
);

export default ApacheSVG;
