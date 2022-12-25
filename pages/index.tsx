import ReactEcharts from 'echarts-for-react';
import Head from 'next/head';
import { Responsive, WidthProvider } from 'react-grid-layout';

import {
  defaultRGLBreakpointWiseColumns,
  defaultRGLBreakpoints,
} from '../configs/breakpoint.config';
import { traditionalLayout } from '../configs/landing-layouts/traditional-layout';
import { option1, option2 } from '../dummy-data';
import styles from '../styles/Home.module.scss';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const handleBreakPointChange = (newBreakpoint: string, newCols: number) => {
    console.log(newBreakpoint, newCols);
  };

  const handleLayoutChange = (
    currentLayout: ReactGridLayout.Layout[],
    allLayouts: ReactGridLayout.Layouts,
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
          layouts={traditionalLayout}
          onBreakpointChange={handleBreakPointChange}
          onLayoutChange={handleLayoutChange}
          isDraggable
          isResizable
          breakpoints={defaultRGLBreakpoints}
          cols={defaultRGLBreakpointWiseColumns}
        >
          {traditionalLayout.lg.map((item, index) => (
            <div key={item.i} style={{ width: '100%', height: '100%' }}>
              <div style={{ textAlign: 'center', maxWidth: '100%' }}>
                {item.i}
              </div>
              <div style={{ padding: '2px', maxWidth: '100%', height: '100%' }}>
                <ReactEcharts
                  lazyUpdate
                  option={index % 2 === 0 ? option1 : option2}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
