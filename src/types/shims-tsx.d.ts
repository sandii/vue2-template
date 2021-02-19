import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
declare module 'vue/types/vue' {
  type Bridge = (
    action: string,
    ...args: any[],
  ) => any;
  type Ev = (type: string) => void;
  interface Vue {
    $bridge: Bridge;
    $ev: Ev;
  }
  interface VueConstructor {
    $bridge: Bridge;
    $ev: Ev;
  }
}
