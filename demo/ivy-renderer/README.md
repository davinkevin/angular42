# IvyRenderer

## Creation of 100 component with element in template : 

```fish
for x in (seq 1 100);
        ng g c testComp$x -s -t --spec false --flat true;
        set DESTINATION src/app/test-comp(echo $x).component.ts
        cat src/app/parent.comp.ts | sed -e 's@_TOBEREPLACED_@'(echo $x)'@g' > $DESTINATION;
end
```

