---
inject: true
to: src/components/index.ts
after: // <%= h.changeCase.constant(folder) %>
---
export {default as <%= h.changeCase.pascal(name) %>} from './<%= folder %>/<%= h.changeCase.pascal(name) %>';