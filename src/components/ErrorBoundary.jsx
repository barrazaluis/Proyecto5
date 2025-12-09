import React from 'react'
export default class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error, info) { console.error('Error capturado:', error, info) }
  render() { return this.state.hasError ? <div className="p-6"><h1 className="text-xl font-bold">Algo salió mal.</h1></div> : this.props.children }
}