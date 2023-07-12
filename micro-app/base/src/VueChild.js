export function VueChild() {
  return (
    <div>
      <micro-app
        name='vue-child'
        url='http://localhost:3002/vue/'
        baseroute='/vue'
        inline
        disableSandbox
      ></micro-app>
    </div>
  );
}
