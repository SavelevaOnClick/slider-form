---
inject: true
to: src/reducers/index.ts
before: // ADD IMPORT
---
import {<%=h.changeCase.camelCase(name)%>} from './<%=h.changeCase.camelCase(name)%>';