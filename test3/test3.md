## 3-1 請說明 Flux, Redux, Vuex 之間的差異

皆為單向資料流的狀態管理庫，使用在不同框架上，就我所理解有以下差異：
- 更新 state 的方式有些差異：
    - flux：是透過 action 直接改變 store
    - redux：action 不是改變 store 裡的 state，而是直接返回新的 store
    - vuex：action commit 去 trigger mutation，由 mutation 去改變 state
- re-render：
    - flux：store 改變時會通知相對應的方法更新 state 及 view
    - redux：有新的 store 時重新渲染 Provider 下的 component
    - vuex：是響應式的，store 有變化的時候會自動更新相關的組件

## 3-2 請說明單向資料流與雙向資料流在處理資料更新上的異同
雙向資料流允許「父子層」或者「Dom 與實體間」可以雙向更新及傳遞同一個資料。
單向資料流概念是單一方向更新及傳遞資料，父層將資料傳給子層後，如子層要更新資料，則透過方法去告知父層，統一由父層更新資料。

## 3-3 這些設計主要想要解決什麼樣的問題? 優缺點為何?
就我理解的，單向主要是確保資料源統一，不會有非預期的變動，缺點是要更新資料需要透過一些機制。而雙向較容易更新資料，在元件及實體間使用較方便，缺點是較難掌握是誰更新了資料。
