import { jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

const l = function() {
  return jsx("main", { className: "flex flex-row w-screen h-screen overflow-clip scrollbar-none", children: jsx(Outlet, {}) });
};

export { l as component };
//# sourceMappingURL=_main-Bpym5h4K.mjs.map
