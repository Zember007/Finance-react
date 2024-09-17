import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ReportCart from './components/ReportCart'
import Infornation from './components/Infornation'
import Modal from './components/Modal'
import SearchInput from './components/UI/SearchInput'
import InputDate from './components/UI/InputDate'
import Letter from './components/Letter'
import Button from './components/UI/Button'
import CheckerFilter from './components/UI/CheckerFilter'
import SwitcherItem from './components/UI/SwitcherItem'

function App() {

  const [search, setSearch] = useState<string>('')
  const [dateBefore, setDateBefore] = useState<string>('')
  const [dateFrom, setDateFrom] = useState<string>('')

  const [default_filter, setDefault] = useState<boolean>(true)
  const [sum_filter, setSum] = useState<boolean>(false)
  const [new_filter, setNew] = useState<boolean>(false)
  const [typeFinance, setTypeFinance] = useState<string>('report')

  const repots = [
    {
      number: '8812',
      status: 'payed',
      date: {
        created: '01.11.2005',
        before: '12.11.2024'
      },
      prices: {
        price: '8010',
        payed: '1222'
      }
    },
    {
      number: '8812',
      status: 'progress',
      date: {
        created: '01.11.2005',
        before: '12.11.2024'
      },
      prices: {
        price: '8010',
        payed: '1222'
      }
    },
    {
      number: '8812',
      status: 'progress',
      date: {
        created: '01.11.2005',
        before: '12.11.2024'
      },
      prices: {
        price: '8010',
        payed: '1222'
      }
    }
  ]

  const [actOpen, setAct] = useState<boolean>(false)
  const [advance, setAdvance] = useState<boolean>(false)
  const [letter, setLetter] = useState<boolean>(false)


  return (
    <div className='app'>


      <div className="container">
        <div className="app__inner">
          <Sidebar />
          <div className='wrapper'>
            <Header />
            <main className='main'>
              <div className="main__column">
                <div className="switcher">
                  <SwitcherItem data='banks' active={typeFinance} title='Банки' change={setTypeFinance}/>
                  <SwitcherItem data='accounts' active={typeFinance} title='Счета' change={setTypeFinance}/>
                  <SwitcherItem data='close_documents' active={typeFinance} title='Закрывающие документы' change={setTypeFinance}/>
                  <SwitcherItem data='report' active={typeFinance} title='Отчёт по движению средств' change={setTypeFinance}/>                  
                </div>
                <div className="search_block">
                  <div className="search_block__inputs">
                    <SearchInput value={search} change={setSearch} placeholder='Фамилия сотрудника, номер билета, город'/>
                    <InputDate change={setDateFrom} value={dateFrom} placeholder='Дата от'/>
                    <InputDate change={setDateBefore} value={dateBefore} placeholder='Дата до'/>
                  </div>
                  <div className="search_block__filters">

                    <input type="checkbox" id='input_type' className='input_type' />

                    <label htmlFor="input_type" className="type">

                      <span>Все</span>

                      <span>Активные</span>

                    </label>


                    <CheckerFilter change={setDefault} title='По умолчанию' active={default_filter}/>

                    <CheckerFilter change={setSum} title='По сумме' active={sum_filter}/>

                    <CheckerFilter change={setNew} title='Сначала новые' active={new_filter}/>
                  
                  </div>
                </div>
                <div className="reports">
                  <div className="reports__top">
                    <div className="reports__title">Счета</div>
                    <button className="reports__download">
                      <span>Скачать все</span>
                      <img src="/images/icons/download_xlsx.svg" alt="xlsx" />
                    </button>
                  </div>
                  <div className="reports__box">
                    {
                      repots.map(function (report) {
                        return (
                          <ReportCart number={report.number} status={report.status} date={report.date} prices={report.prices}></ReportCart>
                        )
                      })

                    }
                  </div>
                </div>
              </div>
              <div className="main__column">
                <Infornation />
                <div className="finances__nav">
                  <div className="buttons_generates">
                    <Button action={setAct} title='Сформировать акт сверки'/>
                    <Button action={setAdvance} title='Сформировать счёт на аванс'/>
                  </div>
                  <Button action={setLetter} title='Гарантийное письмо'/>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div className={actOpen ? "modal__wrapper active" : "modal__wrapper"}>
        <Modal
          action={setAct}
          title='Акт-сверки'
          text='Укажите период для формирования документа.'
          button='Скачать'
          body={
            <>
              <div className="inpt_date-box">
                <input type="text" placeholder='Дата от' className="inpt_date-value" />
                <input type="date" className="inpt_date" />
                <img src="/images/icons/calendar.svg" alt="calendar" />
              </div>
              <div className="inpt_date-box">
                <input type="text" placeholder='Дата до' className="inpt_date-value" />
                <input type="date" className="inpt_date" />
                <img src="/images/icons/calendar.svg" alt="calendar" />
              </div>
            </>
          }></Modal>
      </div>

      <div className={advance ? "modal__wrapper active" : "modal__wrapper"}>
        <Modal
          action={setAdvance}
          title='Счёт на аванс'
          text='Укажите желаемую сумму аванса.'
          button='Сформировать'
          body={
            <>
              <input type="text" placeholder='50 000,00 ₽' className='input_default' />
            </>
          }></Modal>
      </div>

      <div className={letter ? "modal__wrapper active" : "modal__wrapper"}>
        <Letter
        action={setLetter}
        ></Letter>
      </div>
    </div>
  )
}

export default App
