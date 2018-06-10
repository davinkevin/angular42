import {text} from "@angular/core/src/render3/instructions";

function createViewNodes(view: ViewData) {
  let renderHost: any;
  if (isComponentView(view)) {
    const hostDef = view.parentNodeDef;
    renderHost = asElementData(view.parent !, hostDef !.parent !.nodeIndex).renderElement;
  }
  const def = view.def;
  const nodes = view.nodes;
  for (let i = 0; i < def.nodes.length; i++) {
    const nodeDef = def.nodes[i];
    Services.setCurrentNode(view, i);
    let nodeData: any;
    switch (nodeDef.flags & NodeFlags.Types) {
      case NodeFlags.TypeElement:
        const el = createElement(view, renderHost, nodeDef) as any;
        let componentView: ViewData = undefined !;
        if (nodeDef.flags & NodeFlags.ComponentView) {
          const compViewDef = resolveDefinition(nodeDef.element !.componentView !);
          componentView = Services.createComponentView(view, nodeDef, compViewDef, el);
        }
        listenToElementOutputs(view, componentView, nodeDef, el);
        nodeData = <ElementData>{
          renderElement: el,
          componentView,
          viewContainer: null,
          template: nodeDef.element !.template ? createTemplateData(view, nodeDef) : undefined
        };
        if (nodeDef.flags & NodeFlags.EmbeddedViews) {
          nodeData.viewContainer = createViewContainerData(view, nodeDef, nodeData);
        }
        break;
      case NodeFlags.TypeText:
        nodeData = createText(view, renderHost, nodeDef) as any;
        break;
      case NodeFlags.TypeClassProvider:
      case NodeFlags.TypeFactoryProvider:
      case NodeFlags.TypeUseExistingProvider:
      case NodeFlags.TypeValueProvider: {
        nodeData = nodes[i];
        if (!nodeData && !(nodeDef.flags & NodeFlags.LazyProvider)) {
          const instance = createProviderInstance(view, nodeDef);
          nodeData = <ProviderData>{instance};
        }
        break;
      }
      case NodeFlags.TypePipe: {
        const instance = createPipeInstance(view, nodeDef);
        nodeData = <ProviderData>{instance};
        break;
      }
      case NodeFlags.TypeDirective: {
        nodeData = nodes[i];
        if (!nodeData) {
          const instance = createDirectiveInstance(view, nodeDef);
          nodeData = <ProviderData>{instance};
        }
        if (nodeDef.flags & NodeFlags.Component) {
          const compView = asElementData(view, nodeDef.parent !.nodeIndex).componentView;
          initView(compView, nodeData.instance, nodeData.instance);
        }
        break;
      }
      case NodeFlags.TypePureArray:
      case NodeFlags.TypePureObject:
      case NodeFlags.TypePurePipe:
        nodeData = createPureExpression(view, nodeDef) as any;
        break;
      case NodeFlags.TypeContentQuery:
      case NodeFlags.TypeViewQuery:
        nodeData = createQuery() as any;
        break;
      case NodeFlags.TypeNgContent:
        appendNgContent(view, renderHost, nodeDef);
        // no runtime data needed for NgContent...
        nodeData = undefined;
        break;
    }
    nodes[i] = nodeData;
  }
  // Create the ViewData.nodes of component views after we created everything else,
  // so that e.g. ng-content works
  execComponentViewsAction(view, ViewAction.CreateViewNodes);

  // fill static content and view queries
  execQueriesAction(
    view, NodeFlags.TypeContentQuery | NodeFlags.TypeViewQuery, NodeFlags.StaticQuery,
    CheckType.CheckAndUpdate);
}


function createViewNodes(view: ViewData) {
  ...
    switch (nodeDef.flags & NodeFlags.Types) {
      case NodeFlags.TypeElement: element(node); break;
      case NodeFlags.TypeText: text(node); break;
      case NodeFlags.TypeClassProvider:
      case NodeFlags.TypeFactoryProvider:
      case NodeFlags.TypeUseExistingProvider:
      case NodeFlags.TypeValueProvider: valueProvider(node); break;
      case NodeFlags.TypePipe:  pipe(node); break;
      case NodeFlags.TypeDirective:  directive(node); break;
      case NodeFlags.TypePureArray:
      case NodeFlags.TypePureObject:
      case NodeFlags.TypePurePipe: purePipe(node); break;
      case NodeFlags.TypeContentQuery:
      case NodeFlags.TypeViewQuery: viewQuery(node); break;
      case NodeFlags.TypeNgContent: ngContent(node); break;
    }
  ...
}
