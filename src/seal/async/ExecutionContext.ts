export default interface ExecutionContext {
    registerForExecution(f: () => void)
    run()
}