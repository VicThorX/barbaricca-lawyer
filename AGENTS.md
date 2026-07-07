<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Codebase Intelligence with Graphify

This project uses a Graphify knowledge graph generated under `graphify-out/`.
Always consult the knowledge graph for codebase, tracing, and architecture questions before grepping files or reading logs.

## Rules for AI Agents:
- **Query the Graph**: When `graphify-out/graph.json` exists, first run `python -m graphify query "<your question>"` to fetch a scoped subgraph.
- **Trace Relationships**: Use `python -m graphify path "<Concept A>" "<Concept B>"` to find the shortest path and connections between files, symbols, or modules.
- **Explain Symbols**: Use `python -m graphify explain "<Symbol/Concept>"` to see incoming/outgoing edges and community grouping.
- **Read Reports**: Read `graphify-out/GRAPH_REPORT.md` only for general overview or when specific queries do not return enough context.
- **Update Graph**: After modifying codebase files, run `python -m graphify update .` to keep the graph in sync (this is fully local, deterministic, and free of API costs).
