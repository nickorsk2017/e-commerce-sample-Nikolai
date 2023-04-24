import Header from "@/common/Header/Header";
import Provider from "@/store/Provider";
import styles from './layout.module.scss';
import './globals.css';

export const metadata = {
  title: 'Created by Stepanov Nikolai',
  description: 'Created by Stepanov Nikolai',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className={styles.layout}>
            <div className={styles.layout_wrapper}>
              <Header/>
              <div className={styles.layout_content}>
                {children}
              </div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
