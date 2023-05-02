import { useState, useEffect } from 'react'

import AddBill from './components/AddBill'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false)
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  const [bills, setBills] = useState([])

  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem('categories')
    )
    console.log("categoriesInLocalStorage", categoriesInLocalStorage)

    const billsInLocalStorage = JSON.parse(
      localStorage.getItem('bills')
    )
    console.log("billsInLocalStorage", billsInLocalStorage)

    setCategories(categoriesInLocalStorage)
    setBills(billsInLocalStorage)

    if (categoriesInLocalStorage === null) {
      setShouldShowAddCategory(true)
    }
  }, [])

  const addCategory = (category) => {
    const updatedCategories = [...(categories || []), category]
    setCategories(updatedCategories)
    setShouldShowAddCategory(false)
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
  }

  const addBill = (amount, category, date) => {
    const bill = { amount, category, date }
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    setShouldShowAddBill(false)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }

  const activeBills = () => {
    return bills
      .filter(bill =>
        activeCategory ? bill.category === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  }

  const showAddBill = () => {
    setShouldShowAddBill(true)
  }

  const removeBill = index => {
    let updatedBills = [...bills]
    updatedBills = updatedBills
      .slice(0, index)
      .concat(updatedBills.slice(index + 1, updatedBills.length))
    setBills(updatedBills)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const setNewActiveCategory = index => {
    setActiveCategory(index)
  }

  return (
    <div className="App">
      {shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : shouldShowAddBill ? (
        <AddBill onSubmit={addBill} categories={categories} />
      ) : (
        <div>
          <NavBar
            categories={categories}
            showAddCategory={showAddCategory}
            activeCategory={activeCategory}
            setNewActiveCategory={setNewActiveCategory}
          />
          <div className="container flex">
            <div className="w-1/2">
              <BillsTable
                bills={activeBills(bills)}
                showAddBill={showAddBill}
                removeBill={removeBill}
              />
            </div>
            {/* <div className="w-1/2">
              <Chart />
            </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default App