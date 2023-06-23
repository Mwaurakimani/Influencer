function n(a){let t;return a<1e3||a>=1e3&&a<1e6?(t=Math.trunc(a/1e3),t=t+"K"):a>=1e6&&a<1e9?(t=Math.trunc(a/1e6),t=t+"M"):(t=Math.trunc(a/1e9),t=t+"B"),t}export{n as f};
