# React Hooks test

This is a project to try and use all React hooks in one project. 

---

## Todos: 

- [x] - `useState`
- [x] - `useEffect`
- [x] - `useContext`
- [ ] - `useReducer`
- [ ] - `useCallback`
- [ ] - `useMemo`
- [ ] - `useRef`
- [ ] - `useImperativeHandle`
- [ ] - `useLayoutEffect`
- [ ] - `useDebugValue`

<br>

---

## `useState`

```js
const [data, setData] = useState([])
```

<br>

---

## `useEffect`

```js
useEffect(
  () => {
    const fetchApi = async () => {
      setLoading(true)
      try {
        const response = await fetch(api).then((res) => res.json())
        setData(response)
        setLoading(false)
      } catch (error) {
        console.log(`Uh oh: ${error}`)
      }
    }

    fetchApi()
  },
  [api]
)
```
