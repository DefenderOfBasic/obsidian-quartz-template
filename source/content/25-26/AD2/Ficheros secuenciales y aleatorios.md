Hay dos tipos de flujos de datos definidos:
* **Flujo de Caracteres (16 bits):** descienden de las clases Reader y Writer.
* **Flujos de Bytes (8 bits)**: descienden de las clases InputStream y OutputStream.
# Flujos de caracteres
## Reader y Writer
>Las clases abstractas **Reader** y **Writer** manejan flujos de caracteres Unicode.
---

Las clases de flujos de caracteres más importantes son:
* **FileReader** / **FileWriter**. Se utilizan para el acceso a ficheros de texto. Estas clases leen y escriben caracteres en ficheros.
* **CharArrayReader** / **CharArrayWriter**. Se utilizan para el acceso a caracteres. Estas clases leen y escriben un flujo de caracteres en un vector de caracteres. 
* **BufferedReader** / **BufferedWriter**. Se utilizan para la buferización de datos. Estas clases usan un buffer intermedio entre la memoria y el flujo de datos, para evitar que cada lectura o escritura acceda directamente al fichero.
### FileReader y FileWriter
>Se utilizan para ficheros de texto.
#### FileReader
Al instanciar un objeto con la clase **FileReader** el programa abre el fichero que se envía como argumento para la lectura y su información se puede leer de forma **secuencial carácter a carácter**.

| Método                                               | Explicación                                                                                   |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| int read()                                           | Lee un carácter y lo devuelve                                                                 |
| int read(char[] buffer)                              | Lee hasta buffer.length caracteres de datos y los almacena en el vector de caracteres buffer. |
| int read(char[] buffer, int desplazamiento, int max) | Como el anterior pero lee hasta *max* caracteres y empieza en *desplazamiento*.               |
> Devuelven el número de caracteres leídos o -1 si se ha alcanzado el final del fichero.
#### FileWriter
Al instanciar un objeto con la clase **FileWriter**, el programa abre el fichero especificado con el fin de guardar información, pero **carácter a carácter**. Si el fichero no existe, el programa lo **crea de forma automática**. Si el disco está lleno o protegido contra escritura, se lanzará la excepción **IOException**.

| Método                                                 | Explicación                                                                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| void write(int c)                                      | Escribe un carácter.                                                                                   |
| void write(char[] buffer)                              | Escribe un vector de caracteres.                                                                       |
| void write(char[] buffer, int desplazamiento, int max) | Escribe max caracteres de datos del vector de caracteres buffer comenzando por buffer[desplazamiento]. |
| void write(String str)                                 | Escribe una cadena de caracteres.                                                                      |
| Writer append(char c)                                  | Añade un carácter al final de un fichero.                                                              |
### BufferedReader y BufferedWriter
>Las clases **BufferedReader** y **BufferedWriter** se pueden utilizar sobre las clases **FileReader** y **FileWriter** u **otros flujos de caracteres** para realizar operaciones de **entrada/salida** con un **buffer intermedio**, en lugar de carácter a carácter.
#### BufferedReader
Para construir un objeto BufferedReader, se necesita tener instanciado previamente un objeto FileReader:
```java
FileReader fr = new FileReader(nombreFichero);
BufferedReader br = new BufferedReader(fr);
```

| Método            | Explicación                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| String readLine() | Lee **una línea** de caracteres del flujo y la devuelve. Devuelve **null** si no hay nada que leer o se llega al final del fichero. |
| void close()      | Libera los recursos del sistema asociados al flujo y lo cierra.                                                                     |
#### BufferedWriter
Para construir un objeto BufferedWriter, se necesita tener instanciado previamente un objeto FileWriter:
```java
FileWriter fw = new FileWriter(nombreFichero);
BufferedWriter bw = new BufferedWriter(fw);
```

| Método                 | Explicación                                        |
| ---------------------- | -------------------------------------------------- |
| void write(String str) | Escribe una línea de caracteres en el flujo.       |
| void newLine()         | Escribe un salto o separador de línea en el flujo. |
| void close()           | Vacía el flujo y lo cierra.                        |
# Flujos de bytes
>Los **ficheros binarios** almacenan secuencias de **dígitos binarios** (bytes), que no son legibles directamente por el usuario, y tienen la ventaja de que ocupan **menos espacio en disco**. 

>[!info]
Las clases abstractas **InputStream** y **OutputStream** manejan flujos de bytes.

## InputStream y OutputStream
>Las clases **abstractas** **InputStream** y **OutputStream** manejan flujos de bytes.

* **InputStream**: representa un **flujo de bytes** asociado a una **fuente de datos**, como puede ser un vector de bytes, un objeto String, un fichero, una tubería, una secuencia de otros flujos, una conexión a internet, etc.
* OutputStream: representa un **flujo de bytes** asociado a un **destino de datos**, como puede ser un vector de bytes, un fichero o una tubería.
---
Las clases de flujos de bytes más importantes son:
* **FileInputStream** / **FileOutputStream**. Se utilizan para el acceso a **ficheros binarios**. Estas clases leen y escriben bytes en ficheros.
* **DataInputStream** / **DataOutputStream**. Permiten leer y escribir datos de **tipos primitivos** (boolean, int, short, long, float, double, char) en el flujo.
* **ObjectInputStream** / **ObjectOutputStream**. Permiten leer y escribir **objetos serializables** en el flujo.
### FileInputStream y FileOutputStream
>Se utilizan para el acceso a **ficheros binarios**. Estas clases leen y escriben bytes en ficheros, crean un enlace entre el flujo de bytes y el fichero
#### FileInputStream
El programa abre el fichero en **modo lectura**. Una vez abierto, se podrá leer la información que contiene de forma **secuencial byte a byte**. Si el fichero no existe, se lanzará la excepción **FileNotFoundException**.

| Método                                               | Explicación                                                                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| int read()                                           | Lee un byte y lo devuelve.                                                                                   |
| int read(byte[] buffer)                              | Lee hasta *buffer.length* bytes de datos y los almacena en el vector de caracteres buffer.                   |
| int read(byte[] buffer, int desplazamiento, int max) | Lee hasta *max* bytes de datos y los almacena en el vector *buffer* comenzando por *buffer[desplazamiento]*. |
| void close()                                         | Libera los recursos del sistema asociados al flujo y lo cierra.                                              |
>Estos métodos de lectura devuelven el número de bytes leídos o -1 si se ha alcanzado el final del fichero.

#### FileOutputStream
El programa abre el fichero para **escritura**. Una vez abierto, se podrá guardar información de forma **secuencial byte a byte**. Si el fichero no existe, **se creará en ese momento**. Si el **disco** está **lleno o protegido** contra escritura, se lanzará la excepción **IOException**.

| Método                                                 | Explicación                                                                                        |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| void write(int b)                                      | Escribe un byte.                                                                                   |
| void write(byte[] buffer)                              | Escribe un vector de bytes.                                                                        |
| void write(byte[] buffer, int desplazamiento, int max) | Escribe *max* bytes de datos del vector de bytes *buffer* comenzando por *buffer[desplazamiento]*. |
| void close()                                           | Libera los recursos del sistema asociados al flujo y lo cierra.                                    |
### DataInputStream y DataOutputStream
>Sirven para leer y escribir datos de **tipos primitivos**.

**DataInputStream**

```java
File file = new File(“C:\\directorio\\fichero.dat”);
FileInputStream fis = new FileInputStream(file);
DataInputStream dis = new DataInputStream(fis);
```
**DataOutputStream**
```java
File file = new File(“C:\\directorio\\fichero.dat”);
FileOutputStream fos = new FileOutputStream(file);
DataOutputStream dos = new DataOutputStream(fos);
```
Para saber que se ha alcanzado el **final del fichero**, los métodos lanzan la excepción **EOFException**, así que hay que recogerla y tratarla adecuadamente.
>[!warning]
>Hay que tener mucho cuidado con leer un fichero en el mismo formato en el que se ha escrito porque, de no ser así, se podrían producir errores en la ejecución al no corresponderse los tipos.
### ObjectInputStream y ObjectOutputStream
>Se llama persistencia al proceso de almacenar toda la información que contiene un objeto, manteniendo su estructura, en un fichero binario.

En **Java**, para poder **guardar** un objeto de una clase en un **fichero binario**, dicha clase tiene que implementar la interfaz **Serializable**, que dispone de métodos que permiten escribir y leer **objetos en ficheros binarios**:

---

>La **serialización** permite tomar cualquier objeto que implemente la interfaz **Serializable** y convertirlo en una **secuencia de bits**, que puede ser posteriormente restaurada para regenerar el objeto original.

Para leer objetos serializables de un flujo se utiliza la clase **ObjectInputStream** y para escribir objetos serializables en un flujo se utiliza la clase **ObjectOutputStream**.

---
**Leer un objeto:**
```java
File file = new File("data/empleados.dat");
FileInputStream fis = new FileInputStream(file);
ObjectInputStream ois = new ObjectInputStream(fis);
Persona persona = (Persona) ois.readObject();
```
**Escribir un objeto:**
```java
File file = new File("data/empleados.dat");
FileOutputStream fos = new FileOutputStream(file);
ObjectOutputStream oos = new ObjectOutputStream(fos);
oos.writeObject(persona);
```
>[!warning]
>Al crear un fichero de objetos, se crea una **cabecera inicial** con información y a continuación se añaden los objetos. Si se utiliza el mismo fichero otra vez para añadir más objetos, se creará una nueva cabecera y se añadirán estos objetos a partir de esa cabecera. El problema surge en la lectura del fichero cuando se encuentra con la **segunda cabecera**: aparecerá la excepción **StreamCorruptedException** y no se podrá seguir leyendo más objetos.

Para que el programa Java **no añada estas cabeceras** en el fichero, se puede crear una nueva clase **MyObjectOutputStream** que **herede de ObjectOutputStream**, y dentro de esta nueva clase, sobreescribir el método **writeStreamHeader** para que no realice nada.
#### Ejemplos
```java title=escribirEmpleado()
public static void escribirEmpleado(Empleado empleado) throws FileNotFoundException, IOException {
	ObjectOutputStream oos = null;
	try {
		File file = new File(FICHERO);
		if (file.exists()) {
			System.out.println("existe");
			oos = new MyObjectOutputStream(new FileOutputStream(file, true));
		} else {
			System.out.println("no eciste");
			oos = new ObjectOutputStream(new FileOutputStream(file));
		}
		oos.writeObject(empleado);

	} finally {
		cerrarFlujo(oos);
	}
}
```
```java title=leerEmpleados()
public static List<Empleado> leerEmpleados() throws FileNotFoundException, ClassNotFoundException, IOException {
	List<Empleado> empleados = new ArrayList<>();

	ObjectInputStream ois = null;
	try {
		ois = new ObjectInputStream(new FileInputStream(FICHERO));

		try {
			while (true) {
				Empleado empleado = (Empleado) ois.readObject();
				empleados.add(empleado);
			}
		} catch (EOFException e) {
			System.out.println("Fin del fichero.");
		}

	} finally {
		cerrarFlujo(ois);
	}

	return empleados;
}
```
```java title=cerrarFlujo()
private static void cerrarFlujo(ObjectInputStream ois) {
	try {
		if (ois != null) {
			ois.close();
		}

	} catch (IOException e) {
		System.out.println("Error al cerrar el fichero binario.");
		e.printStackTrace();
	}
}
```
```java title=actualizarEmpleado()
public static boolean actualizarEmpleado(int idEmpleado, String nombre, String apellido, String fechaAlta)
		throws ClassNotFoundException, IOException {
	boolean actualizado = false;
	ObjectInputStream streamInputEmpleados = null;
	ObjectOutputStream streamOutputEmpleadosTmp = null;

	try {
		streamInputEmpleados = new ObjectInputStream(new FileInputStream(FICHERO));
		streamOutputEmpleadosTmp = new ObjectOutputStream(new FileOutputStream(FICHERO_TMP));

		boolean finalFichero = false;
		while (!finalFichero) {
			try {
				Empleado empleado = (Empleado) streamInputEmpleados.readObject();
				if (empleado.getCodigo() == idEmpleado) {
					empleado.setNombre(nombre);
					empleado.setApellido(apellido);
					empleado.setFechaAlta(fechaAlta);
					actualizado = true;
				}
				streamOutputEmpleadosTmp.writeObject(empleado);

			} catch (EOFException e) {
				finalFichero = true;
			}
		}
	} finally {
		cerrarFlujo(streamInputEmpleados);
		cerrarFlujo(streamOutputEmpleadosTmp);
	}
	actualizarFicheroOriginal(FICHERO, FICHERO_TMP);
	return actualizado;
}
```
```java title=eliminarEmpleado()
public static boolean eliminarEmpleado(int idEmpleado) throws ClassNotFoundException, IOException {
	boolean eliminado = false;
	ObjectInputStream streamInputEmpleados = null;
	ObjectOutputStream streamOutputEmpleadosTmp = null;

	try {
		streamInputEmpleados = new ObjectInputStream(new FileInputStream(FICHERO));
		streamOutputEmpleadosTmp = new ObjectOutputStream(new FileOutputStream(FICHERO_TMP));

		boolean finalFichero = false;
		while (!finalFichero) {
			try {
				Empleado empleado = (Empleado) streamInputEmpleados.readObject();
				if (empleado.getCodigo() != idEmpleado) {
					streamOutputEmpleadosTmp.writeObject(empleado);
				} else {
					eliminado = true;
				}

			} catch (EOFException e) {
				finalFichero = true;
			}
		}

	} finally {
		cerrarFlujo(streamInputEmpleados);
		cerrarFlujo(streamOutputEmpleadosTmp);

	}
	actualizarFicheroOriginal(FICHERO, FICHERO_TMP);
	return eliminado;
}
```
```java title=actualizarFicheroOriginal()
private static void actualizarFicheroOriginal(String ogFile, String tmpFile) {
	File newEmpleados = new File(tmpFile);
	File oldEmpleados = new File(ogFile);
	oldEmpleados.delete();
	newEmpleados.renameTo(oldEmpleados);
}
```
# Clases puente
>Son clases que realizan transformaciones entre flujos de bytes y flujos de caracteres.
* **InputStreamReader** convierte un InputStream en un Reader (lee bytes y los convierte a caracteres).
* **OutputStreamReader** convierte un OutputStream en un Writer (lee caracteres y los convierte a bytes).