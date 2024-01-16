import './style.scss'
import { useEffect, useState, useReducer, useRef } from 'react';
import { IBlockly, SingletonBlockly } from '../Blockly/Blockly';
import WorkspaceXML from '../../utils/default-xml';
import addSvg from './assets/add.svg'
import exportSvg from './assets/export.svg'
import deleteSvg from './assets/delete.svg'
import editSvg from './assets/edit.svg'
import blockSvg from './assets/block.svg'
import jsFIle from './assets/js-file.svg'
import stone from '../../assets/textures/stone.png'
import Swal from 'sweetalert2';
import { Translation } from '../../langs/translation';
import { set } from 'date-fns';
import FileSaver from 'file-saver';
import { save } from 'blockly/core/serialization/blocks';

const t: Function = Translation.translate;


export interface Workspace {
    name: string,
    content: string
}


const WorkspaceMenu = () => {

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [workspaces, setWorkspaces] = useState<Workspace[]>([])
    const [currentWorkspace, setCurrentWorkspace] = useState<number>()

    useEffect(() => {
        let db = getDb()
        if (db.length == 0) {
            db = [{
                name: "Workspace",
                content: WorkspaceXML.EMPTY
            }]
        }
        setWorkspaces(db)
        setCurrentWorkspace(0)
    }, [])

    useEffect(()=>{
        saveDb()
    },[workspaces])

    const saveDb = () => {
        localStorage.setItem('workspaces', JSON.stringify(workspaces))
    }

    const getDb = () => {
        let db = localStorage.getItem('workspaces')
        if (!db) return []
        return JSON.parse(db)
    }

    const addWorkspace= (workspace : Workspace )=>{
        let i = 0;
        while(workspaces.find(w=>w.name == workspace.name)){
            workspace.name = `${workspace.name} (${i})`
            i++
        }
        setWorkspaces([...workspaces, workspace])
        setCurrentWorkspace(workspaces.length)
    }

    const createWorkspace = () => {
        let workspace: Workspace = {
            name: "Workspace",
            content: WorkspaceXML.EMPTY
        }
        addWorkspace(workspace)
    }

    const deleteWorkspace = (workspace: Workspace) => {
        Swal.fire({
            title: t("delete_workspace"),
            text: t("delete_workspace_content"),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: t("delete_workspace_confirm"),
            cancelButtonText: t("cancel")
        }).then((result) => {
            if (result.isConfirmed) {
                setWorkspaces(workspaces.filter(w => w != workspace))
            }
        })
    }

    const editWorkspaceName = (workspace: Workspace) => {
        Swal.fire({
            title: t("edit_workspace_name"),
            input: 'text',
            inputValue: workspace.name,
            showCancelButton: true,
            confirmButtonText: t("edit_workspace_name_confirm"),
            cancelButtonText: t("cancel")
        }).then((result) => {
            if (result.isConfirmed) {
                workspace.name = result.value
                setWorkspaces([...workspaces])
            }
        })
    }

    const importWorkspace = () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
            let file = Array.from(input.files ?? [])[0];
            if (!file) return;
            let reader = new FileReader();
            reader.onload = _ => {
                addWorkspace({
                    name: file.name,
                    content: reader.result as string
                })
            };
            reader.readAsText(file);

        };
        input.click();
    }

    const exportWorkspace = (workspace: Workspace) => {
        var blob = new Blob([workspace.content], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, workspace.name);
    }

    const saveCurrentWorkspace = () => {
        





    const changeCurrentWorkspace = (i: number) => {
        setCurrentWorkspace(i)
        SingletonBlockly.getBlockly().setXml(workspaces[i].content)
    }

    return (
        <div className="WorkspaceMenu" style={{
            backgroundImage: `url(${stone})`
        }}>
            <div className='workspace-tabs'>
                {workspaces.map((w, i) => {
                    return (
                        <div className={`workspace-tab ${currentWorkspace == i ? 'active' : ''}`} onClick={() => changeCurrentWorkspace(i)}>
                            {w.name}
                            <div className='tab-controls'>
                                <img className='tab-button' src={exportSvg} onClick={() => exportWorkspace(w)}></img>
                                <img className='tab-button' src={editSvg} onClick={() => editWorkspaceName(w)}></img>
                                <img className='tab-button' src={deleteSvg} onClick={() => deleteWorkspace(w)}></img>
                            </div>
                        </div>)
                })}
            </div>
            <div className='workspace-controls'>
                <img src={addSvg} onClick={() => createWorkspace()}></img>
                <img src={jsFIle} onClick={() => importWorkspace()}></img>
            </div>
        </div>
    )
}

export default WorkspaceMenu;