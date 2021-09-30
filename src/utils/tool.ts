import xlsx from 'xlsx';

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
export const sheet2blob = (sheet: any, sheetName?: string) => {
	sheetName = sheetName || 'sheet1';
	const workbook = {
		SheetNames: [sheetName],
		Sheets: {}
	};
	workbook.Sheets[sheetName] = sheet;
	// 生成excel的配置项
	const wopts: any = {
		bookType: 'xlsx', // 要生成的文件类型
		bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
		type: 'binary'
	};

	// 字符串转ArrayBuffer
	const s2ab = (s: string) => {
		const buf = new ArrayBuffer(s.length);
		const view = new Uint8Array(buf);
		for (let i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}

	const wbout = xlsx.write(workbook, wopts);
	const blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});

	return blob;
}

/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param url 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
 export const openDownloadDialog = (url: any, saveName: string) =>
 {
     if(typeof url == 'object' && url instanceof Blob)
     {
         url = URL.createObjectURL(url); // 创建blob地址
     }
     const aLink = document.createElement('a');
     aLink.href = url;
     aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
     let event;
     if(window.MouseEvent) event = new MouseEvent('click');
     else
     {
         event = document.createEvent('MouseEvents');
         event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
     }
     aLink.dispatchEvent(event);
}

// 传入csv，执行后就会弹出下载框
export const exportExcel = (sheet: any, name: string) => {
	// const sheet = csv2sheet(csv);
	const blob = sheet2blob(sheet);
	openDownloadDialog(blob, `${name}.xlsx`)
}

export function readAs(file:any, type = 'DataURL', encoding = 'UTF-8') {
    const reader:any = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);

        reader.onerror = reject;

        reader[`readAs${type}`](file, encoding);
    });
}

/**
 * @param {File} file
 *
 * @return {String}
 */
export async function readAsText(file:any) {
    return await readAs(
        file,
        'Text',
    );
}