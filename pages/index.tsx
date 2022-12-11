import Head from "next/head";
import ReactEcharts from "echarts-for-react";
import { Responsive, WidthProvider } from "react-grid-layout";
import layout from "../configs/layout.config";
import styles from "../styles/Home.module.scss";
import {
  defaultRGLBreakpoints,
  defaultRGLBreakpointWiseColumns,
} from "../configs/breakpoint.config";
import { option2, option1 } from "../dummy-data";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const handleBreakPointChange = (newBreakpoint: string, newCols: number) => {
    console.log(newBreakpoint, newCols);
  };

  const handleLayoutChange = (
    currentLayout: ReactGridLayout.Layout[],
    allLayouts: ReactGridLayout.Layouts
  ) => {
    console.log(currentLayout, allLayouts);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>React Grid Layout - Playground</title>
        <meta name="description" content="React Grid Layout - Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          onBreakpointChange={handleBreakPointChange}
          onLayoutChange={handleLayoutChange}
          isDraggable
          isResizable
          breakpoints={defaultRGLBreakpoints}
          cols={defaultRGLBreakpointWiseColumns}
        >
          {layout.lg.map((item, index) => (
            <div key={item.i}>
              <ReactEcharts option={index % 2 === 0 ? option1 : option2} />
            </div>
          ))}
        </ResponsiveGridLayout>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
