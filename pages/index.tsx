import Head from "next/head";
import ReactEcharts from "echarts-for-react";
import { Responsive, WidthProvider } from "react-grid-layout";
import layout from "../configs/layout.config";
import styles from "../styles/Home.module.scss";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Home() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  const option2 = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  };

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
          breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
          {layout.lg.map((item, index) => (
            <div key={item.i} style={{ border: "1px" }}>
              <ReactEcharts option={index % 2 === 0 ? option : option2} />
            </div>
          ))}
        </ResponsiveGridLayout>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
