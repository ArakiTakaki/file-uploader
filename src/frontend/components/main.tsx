import * as React from 'react';

const main = () => {
  // variables

  // elements
  const $file = React.useRef<HTMLInputElement>(null);

  // side effect
  React.useEffect(() => {
    console.log($file.current);
  }, []);

  return (
    <div>
      <div>
        <input type="file" ref={$file} />
      </div>
    </div>
  );
};

main.defaultProps = {};
export default main
