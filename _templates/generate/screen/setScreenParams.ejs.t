---
inject: true
to: src/types/navigation.ts
after: // EXPORT SCREEN PARAMS
---
export type <%= h.changeCase.pascal(name) %>RouteProp = RouteProp<RootStackParamList, '<%= h.changeCase.pascal(name) %>'>;