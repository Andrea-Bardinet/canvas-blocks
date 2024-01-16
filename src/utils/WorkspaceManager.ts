



















// import WorkspaceXML from "./default-xml";

// export interface Workspace {
//     name: string,
//     type: "block" | "code",
//     content: String,
// }

// export default class WorkspaceManager {

//     private static ref: WorkspaceManager;
//     private onChangeCallbacks: Function[] = []

//     private workspaces: Workspace[] = [];

//     private constructor() {
//         WorkspaceManager.ref = this
//         let workspaces = JSON.parse(localStorage.getItem("workspaces")!) as Workspace[]
//         if (!workspaces || workspaces.length == 0) {
//             this.workspaces = []
//         }
//         else {
//             this.workspaces = workspaces
//         }

//     }

//     static getWorkspaceManager = (): WorkspaceManager => {
//         if (!WorkspaceManager.ref) {
//             WorkspaceManager.ref = new WorkspaceManager();
//         }
//         return WorkspaceManager.ref;
//     }

//     getWorkspaces = (): Workspace[] => {
//         return this.workspaces
//     }

//     addWorkspace = (workspace: Workspace) => {
//         if (workspace.name == "") {
//             let i = 1
//             while (WorkspaceManager.getWorkspaceManager().contains(`Workspace_${i}`)) {
//                 i++
//             }
//             workspace.name = `Workspace_${i}`
//         }
//         this.workspaces.push(workspace)
//         this.save()
//     }

//     removeWorkspace = (workspace: Workspace) => {
//         if (this.workspaces.length <= 1) { return }
//         this.workspaces = this.workspaces.filter((w: Workspace) => w.name != workspace.name)
//         this.save()
//     }

//     updateWorkspaceXML = (workspaceName: string, xml: string) => {
//         this.workspaces.forEach((w: Workspace, index: number) => {
//             if (w.name == workspaceName) {
//                 this.workspaces[index].content = xml
//             }
//         })
//         this.save()
//     }

//     renameWorkspace = (workspaceName: string, newName: string) => {
//         this.workspaces = this.workspaces.map((w: Workspace) => {
//             if (w.name == workspaceName) {
//                 w.name = newName
//             }
//             return w
//         })
//         this.save()
//     }

//     addOnChangeCallbacks = (callback: Function) => {
//         this.onChangeCallbacks.push(callback)
//     }

//     save = () => {
//         // console.log(this.getWorkspaces());
//         this.onChangeCallbacks.forEach((callback: Function) => callback([...this.getWorkspaces()]))
//         localStorage.setItem("workspaces", JSON.stringify(this.workspaces))
//     }

//     contains = (name: string): boolean => {
//         return this.workspaces.some((workspace: Workspace) => workspace.name == name)
//     }

// }

